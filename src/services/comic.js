import axios from "axios";

const comic = axios.create({
  baseURL: "https://node-no-cors.herokuapp.com/",
});

export default comic;
