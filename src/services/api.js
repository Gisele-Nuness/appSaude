import axios from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL =
  Platform.OS === "web"
    ? (process.env.NEXT_PUBLIC_API_URL ??
       process.env.EXPO_PUBLIC_API_URL ??
       "http://localhost:8000/api")
    : (process.env.EXPO_PUBLIC_API_URL ??
       "http://10.0.0.189:8000/api");

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("@token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const fruitApi = axios.create({
baseURL: "http://localhost:8080/proxy/api",
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

// npx local-cors-proxy --proxyUrl https://www.fruityvice.com --port 8080 (rodar api web)

//php artisan serve --host 0.0.0.0 --port 8000 (rodar no backend laravel)

