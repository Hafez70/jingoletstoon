import Axios from "axios";
import { API_URL } from "configs";
import storage from "utils/storage";

function authRequestInterceptor(config) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  config.timeout = 5000;
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    //const { addNotification } = useNotificationStore();
    const message = error.response?.data || error.message;
    // addNotification({
    //     type: 'error',
    //     title: 'Error',
    //     message,
    // });
    console.log(message);
    return message;
  }
);
