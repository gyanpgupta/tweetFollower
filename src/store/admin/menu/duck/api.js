import axios from "axios";

const HOSTNAME = process.env.REACT_APP_API_HOSTNAME;

export const getMenus = (_) => {
  return new Promise(async (resolve, reject) => {
    const data = await axios.get(`${HOSTNAME}/api/v1/menus`);
    resolve({ data });
  });
};
