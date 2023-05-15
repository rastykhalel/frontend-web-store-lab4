import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HTTPClient {
  // create the AXIOS config with the base URL for the backend service
  private axiosConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:8080"
  };

  // create the AXIOS client instance
  private http: AxiosInstance = axios.create(this.axiosConfig);

  // perform an HTTP GET request
  get<T = any, R = AxiosResponse<T>>(url: string): Promise<R> {
    return this.http.get<T, R>(url);
  }

  // perform an HTTP POST request
  post<T = any, R = AxiosResponse<T>>(url: string, data?: T): Promise<R> {
    return this.http.post<T, R>(url, data);
  }

  // perform an HTTP PUT request
  put<T = any, R = AxiosResponse<T>>(url: string, data?: T): Promise<R> {
    return this.http.put<T, R>(url, data);
  }

  // perform an HTTP DELETE request
  delete<T = any, R = AxiosResponse<T>>(url: string): Promise<R> {
    return this.http.delete<T, R>(url);
  }
}

export const httpClient = new HTTPClient();
