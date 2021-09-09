import axios from "axios";

const comic = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api",
});

export default comic;
