import axios from "axios"
import dotenv from "dotenv"

// default config for linkedin if config is not specify
dotenv.config();
const BASE_URL = process.env.BASE_URL;
const MEMES_URL = process.env.MEMES_URL;

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const linkedinReq = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`
  },
})


export const memesReq = axios.create({
  baseURL: MEMES_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export default linkedinReq;
