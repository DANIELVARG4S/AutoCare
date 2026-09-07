import { AxiosAdapter } from "./axios.adapter";
import { API_BASE_URL } from "../api";

export const vehiculosAdapter = new AxiosAdapter({
    baseUrl: API_BASE_URL,
});
