import { Platform } from "react-native";

const API_PORT = 3000;
const API_PATH = "/api";

export const API_BASE_URL = `http://${
  Platform.OS === "android" ? "10.0.2.2" : "localhost"
}:${API_PORT}${API_PATH}`;
