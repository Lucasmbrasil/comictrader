import axios from "axios";

const fakeapi = axios.create({
  baseURL: "https://fakeapi-capstone.herokuapp.com/",
});

export default fakeapi;
