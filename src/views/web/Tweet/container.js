import { connect } from "react-redux";
//import { fetchMenus } from "../../../store/admin/menu/duck/actions"

import Tweet from "./component";

const TweetContainer = connect(
  // Map state to props
  (state) => ({
    //user: state.admin.menu.data
  }),
  // Map actions to props
  {
    // fetchMenus
  }
)(Tweet);

export default TweetContainer;
