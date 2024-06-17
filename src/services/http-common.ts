import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


// export default axios.create({
// 	baseURL: 'https://potterapi-fedeperin.vercel.app',
// 	headers: {
// 		'Content-type': 'application/json'
// 	},
// });


interface IError {
    status?: number
}

// sourced from - https://altrim.io/posts/axios-http-client-using-typescript

enum StatusCode {
	Unauthorized = 401,
	Forbidden = 403,
	TooManyRequests = 429,
	InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
	Accept: "application/json",
	"Content-Type": "application/json; charset=utf-8",
	"Access-Control-Allow-Credentials": true,
	"X-Requested-With": "XMLHttpRequest",
};

class Http {
	private instance: AxiosInstance | null = null;

	private get http(): AxiosInstance {
		return this.instance != null ? this.instance : this.initHttp();
	}

	initHttp() {
		const http = axios.create({
			baseURL: "https://coffee.alexflipnote.dev/",
			headers,
			withCredentials: true,
		});

		http.interceptors.response.use(
			(response) => response.data,
			(error) => {
				const { response } = error;
				console.log(response)
				return this.handleError(response);
			}
		);

		this.instance = http;
		return http;
	}

	request<T, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
		return this.http.request(config);
	}

	get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this.http.get<T, R>(url, config);
	}

	post<T, R = AxiosResponse<T>>(
		url: string,
		data?: T,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.post<T, R>(url, data, config);
	}

	put<T, R = AxiosResponse<T>>(
		url: string,
		data?: T,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.put<T, R>(url, data, config);
	}

	delete<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this.http.delete<T, R>(url, config);
	}

	private handleError(error: IError) {
		const { status } = error;

		switch (status) {
			case StatusCode.InternalServerError: {
				break;
			}
			case StatusCode.Forbidden: {
				break;
			}
			case StatusCode.Unauthorized: {
				break;
			}
			case StatusCode.TooManyRequests: {
				break;
			}
		}
		return Promise.reject(error);
	}
}
export default new Http();