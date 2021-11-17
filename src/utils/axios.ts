import axios, { Method } from "axios";

interface AxiosProps {
    method: Method,
    url: string,
    headers: any,
    data: any;
}

const BASE_URL = "http://15.165.250.252:3001";
export const ACCESS_TOKEN = 'fiml_access_token';

export const requestWithOutAccessToken = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers,
        data,
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw new Error(err);
        });
};

export const requestWithAccessToken = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers: { ...headers, authorization: 'Bearer ' + ACCESS_TOKEN },
        data,
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw new Error(err);
        });
};

// requestWithAccessToken({ 
//     method: "DELETE", 
//     url: "/sdf", 
//     headers: { "Content-Type": "application/json" }, 
//     data: { a: "" } }).then((res)=>{
//         const res : 타입 = res;
//     }).catch((err)=>{
//         return;
//     })