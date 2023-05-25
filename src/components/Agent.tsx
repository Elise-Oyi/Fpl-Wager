import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:44379/api/" 

const responseBody = (response: AxiosResponse) => response.data

const requests ={
    get:(url)=> axios.get(url).then(responseBody),
    post:(url,data) => axios.post(url,data).then(responseBody)
}

const agent ={
    requests
}

export default agent
