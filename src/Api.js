import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

class Api {

  static token;

  static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", "endpoint: ", endpoint, "data: ", data, method);
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ` +  Api.token };
        const params = method === "get" ? data : {};
        try {
          return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }
  }

  /* get details on one post by id */
  static async setpostss(id) {
    let res = await this.request(`post/${id}`);
    return res;
  }

  /* get a list of all posts */
  static async setposts(data) {
    let res = await this.request(`post`, data);
    return res;
  }

  /* register new user */

  static async register(data) {
    let res = await this.request(`user`, data, "post");
    return res.token;
  }
  /* login new user */

  static async login(data) {
    let res = await this.request(`generate-token`, data, "post");
    return res.token;
  }

    /* get user -- for now, will only work for testuser until tokens implemented */

    static async getUser(username) {
      
      let res = await this.request(`user/${username}`);
      // console.log(res);
      return res;
    }
}

// for now, token ("testuser" / "password")
// Api.token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydWNoaTEyMyIsImV4cCI6MTY0NDQxNTY2MSwiaWF0IjoxNjQ0Mzc5NjYxfQ.PTrm6boQ7r8kYsXj8BQXJ4x39B151CjjagcQ47WRDBM"

export default Api;