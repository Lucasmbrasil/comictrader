import axios from "axios";

const comic = axios.create({
  baseURL:
    "http://node-no-cors.herokuapp.com/",
});

export default comic;
