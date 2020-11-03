
import axios from "axios";

const base = process.env.REACT_APP_BD_URL;

const api = axios.create({
    baseURL: base,
});

export async function postOrder(data)  {
    const response = await api.post(null,data);
    return response.data
}


