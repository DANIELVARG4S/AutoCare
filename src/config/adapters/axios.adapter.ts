import { AxiosInstance, AxiosRequestConfig } from "axios";
import { createApiClient } from "../../api/client";
import { HttpAdapter } from "./http/http.adapter";

interface Options {
    baseUrl: string;
    params?: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {

    private axiosInstance: AxiosInstance;

    constructor(options: Options) {
        this.axiosInstance = createApiClient(options.baseUrl);
        this.axiosInstance.defaults.params = options.params;
    }

    async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
        const { data } = await this.axiosInstance.get<T>(
            url,
            options as AxiosRequestConfig,
        );

        return data;
    }
}