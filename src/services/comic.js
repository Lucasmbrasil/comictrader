import axios from "axios";

const comic = axios.create({
  baseURL: "https://comicvine.gamespot.com/api/",
});

export default comic;
