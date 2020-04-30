import React, { Component } from "react";
import { Twit_Data } from "../../constant/data";
import "antd/dist/antd.css";
import {
  List,
  Avatar,
  Button,
  Space,
  Layout,
  PageHeader,
  Row,
  Col,
} from "antd";
import {
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import _ from "lodash";

const { Header, Footer, Content } = Layout;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

class Tweet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setRandomData: [],
      sortingStatus: "",
    };
  }

  componentDidMount() {
    const setData = Twit_Data.map((data) => {
      data.user.followers_count = Math.floor(Math.random() * 100) + 1;
      return data;
    });
    this.setState({ setRandomData: setData, TwitData: setData });
  }

  sorting(val) {
    this.setState({ sortingStatus: val });
  }

  render() {
    const { setRandomData, sortingStatus } = this.state;
    const sortedData =
      sortingStatus === 0
        ? _.orderBy(setRandomData, ["user.followers_count"], ["asc"])
        : sortingStatus === 1
        ? _.orderBy(setRandomData, ["user.followers_count"], ["desc"])
        : setRandomData;
    return (
      <div>
        <Layout>
          <Header>Header</Header>
          <Content>
            <PageHeader
              className="site-page-header"
              onBack={() => null}
              title="Tweets"
              subTitle="sample tweets sorting"
              extra={[
                <Button
                  type={sortingStatus === 0 ? "primary" : "default"}
                  onClick={this.sorting.bind(this, 0)}
                >
                  Low To High
                </Button>,
                <Button
                  type={sortingStatus === 1 ? "primary" : "default"}
                  onClick={this.sorting.bind(this, 1)}
                >
                  High To Low
                </Button>,
              ]}
            />
            <Row>
              <Col span={4} />
              <Col span={16}>
                <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={sortedData}
                  renderItem={(item) => (
                    <List.Item
                      key={item.user.id}
                      actions={[
                        <IconText
                          icon={StarOutlined}
                          text={item.user.favourites_count}
                          key="list-vertical-star-o"
                        />,
                        <IconText
                          icon={LikeOutlined}
                          text={item.user.friends_count}
                          key="list-vertical-like-o"
                        />,
                        <IconText
                          icon={MessageOutlined}
                          text={item.user.listed_count}
                          key="list-vertical-message"
                        />,
                        <IconText
                          icon={TwitterOutlined}
                          text={item.user.followers_count}
                          key="list-vertical-twitter-o"
                        />,
                      ]}
                      extra={
                        <img
                          width={272}
                          alt="logo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="http://ant.design">{item.user.name}</a>}
                        description={item.user.description}
                      />
                      {item.text}
                    </List.Item>
                  )}
                />
              </Col>
              <Col span={4} />
            </Row>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Tweet;
