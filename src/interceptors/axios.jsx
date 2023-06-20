import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

let refresh = false;
let accessToken = localStorage.getItem("access");
let refreshToken = localStorage.getItem("refresh");

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      const response = await axios.post("token/refresh/", {"refresh" : refreshToken});

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["access"]}`;

        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);

// axios.interceptors.request.use((request) => {
//   request.headers.Authorization = `Bearer ${accessToken}`;
// });
