import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

const createRequest = (options: AxiosRequestConfig) => {
    const defaultOptions: AxiosRequestConfig = {}
    return axios.create(
        Object.assign({}, defaultOptions, options)
    )
}

export default function useRequestWithState() {
    const [loading, setLoading] = useState(false)

    const request = createRequest({})

    const api = (url: string) => {
        setLoading(true)
        return request(url)
            .then(data => {
                return data.data
            })
            .finally(() => setLoading(false))
    }

    return {
        loading,
        api
    }
}

export const useRequest = () => {
    const request = createRequest({})
    return request
}

// import React from "react";
// import axios from "axios";

// const API = axios.create({
//     baseURL: API_BASE_URL,
//     headers: { Accept: EContentType.JSON, ...contentType(EContentType.JSON) },
//     withCredentials: true
// });

// export interface IMethod {
//     [method: string]: string
// }
// const EMethod: IMethod = {
//     GET: 'GET',

// }

// export default function execApi<T>(
//     method: string,
//     uri: string,
//     data?: any,
//     headers?: any,
//     configs?: any
// ) {
//     configs = configs ?? {};
//     Object.assign(configs, { url: uri, method, headers, data: null });

//     if (data) {
//         if (configs.method === EMethod.GET) configs.method = EMethod.POST;

//         if (data instanceof FormData) {
//             // headers = Object.assign(headers, contentType(EContentType.BINARY));
//             configs.data = data;
//         } else {
//             configs.data = data;//JSON.stringify(data);
//         }
//     }

//     Object.assign(configs, { headers: configs.headers || {} });
//     const get_token = getToken()

//     !configs.headers.Authorization
//         && Object.assign(configs.headers, getAuthHeader(get_token))
//     // && Object.assign(configs.headers, getAuthHeader('MTM0NDo0ZjIwN2M3Njg4ZWExNTdkNWIxNzU2NDRlOTQ5YTM3YTVlNjA2MTVm'))

//     return API.request(configs)
//         .then((response: any) => {
//             if ("user-token" in response.headers) {

//             }
//             const result: any = {
//                 data: null,
//                 success: false,
//                 headers: null,
//                 errors: [],
//             };

//             const result1: any = {
//                 ...result,
//                 current_page: 1,
//                 total_items: 0,
//                 total_page: 0
//             };

//             let hasPaging = false;

//             try {
//                 result.success = Math.floor(response.status / 200) === 1;

//                 if (result.success) {
//                     result.data = response.data;
//                     result.success = true;
//                     result.errors = [];
//                     result.headers = response.headers

//                     if ('total_page' in response.data) {
//                         hasPaging = true;
//                         result1.total_page = response.data.total_page ?? 0;
//                         result1.total_items = response.data.total_items ?? 0;
//                         result1.current_page = response.data.current_page ?? 1;
//                     }
//                 } else {
//                     result.errors = response.data.errors ?? ON_RESPONSE_ERROR;
//                 }
//             } catch (e) {
//                 result.errors = ON_PARSE_ERROR;
//             }

//             return hasPaging ? { ...result1, ...result } as IApiPaging<T> : result;
//         })
//         .catch((error) => {

//             if (error.response && error.response.data) {

//                 if (Math.floor(error.response.status / 500) === 1) {
//                     showNotification({ type: "error", message: translate('MAINTEN_SYSTEM'), title: 'Error' });
//                 }

//                 const response = error.response.data;
//                 response.success = false;
//                 response.status_code = error.response.status;

//                 //check error code 
//                 if (response?.error_code && response?.status_code !== 403) {
//                     let { error_code, description } = response
//                     // kiểm tra reload page
//                     if (error_code in CONSTANT_ERROR_CODE.LOAD_PAGE) {
//                         showNotification({ type: "error", message: translate(CONSTANT_LOAD_PAGE[error_code]), title: 'Error' });
//                         setTimeout(reloadToLogin, 3000);
//                     }
//                     if (error_code in CONSTANT_ERROR_CODE.MESSAGE_ERROR_CODE) {
//                         showNotification({ type: "error", message: translate(error_code), title: 'Error' });
//                     } else {
//                         showNotification({ type: "error", message: translate('MAINTEN_SYSTEM'), title: 'Error' });
//                     }
//                 }

//                 return response;
//             } else {
//                 showNotification({ type: "error", message: translate('MAINTEN_SYSTEM'), title: 'Error' });
//                 return {
//                     success: false,
//                     data: null,
//                     errors: ON_FETCH_ERROR,
//                     status_code: 500
//                 };
//             }
//         });
// }

// export default useRequest;
// // import { useState, useEffect } from "react";

// // function useRequest(url: RequestInfo | URL) {
// // const [data, setData] = useState([]);
// // const [isLoading, setIsLoading] = useState(false);
// // const [error, setError] = useState();
// // const [method, setMethod]=useState(String)

// // useEffect(() => {
// // const loadData = async () => {
// // setIsLoading(true);
// // const response = await fetch(url);
// // const data = await response.json();
// // setData(data);
// // setIsLoading(false);

// // };
// // loadData();
// // }, []);

// // return [data, isLoading];
// // }
