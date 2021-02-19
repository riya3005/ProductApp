import Axios from "axios";

const axios = Axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API
});

export default axios;