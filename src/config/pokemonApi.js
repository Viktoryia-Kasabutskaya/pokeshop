import axios from "axios";
import LocalStorageService from "services/LocalStorageService";

const BASE_URL = "http://localhost:3001";

const config = {
  baseURL: BASE_URL,
};

export const pokemonApi = axios.create(config);

pokemonApi.interceptors.request.use((config) => {
  const accessToken = LocalStorageService.getAccessToken();

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});
