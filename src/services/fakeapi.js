import axios from "axios";

const fakeapi = axios.create({
  baseURL: "",
});

export default fakeapi;
