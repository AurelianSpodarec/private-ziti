import { configApp } from "@/config/configApp"

// const API_URL = `${configApp.http}${configApp.url}/api`;

const API_URL = `${process.env.NEXT_PUBLIC_API_HOST}/api/v1`;
const apiConfig = {
  API_URL
};

export default apiConfig;
