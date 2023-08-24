import axios from "axios";
const instance = axios.create({


    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "d0e4a8fad9a8abf11398803ea801c064",
    },
    //API key và access token


});
export default instance;