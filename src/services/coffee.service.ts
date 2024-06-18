
import http from "./http-common";
import ICoffee from "../types/coffee.type";

const fetchCoffee = async (): Promise<ICoffee> => {
    const response = await http.get<ICoffee>('/coffee');
    return response.data;
}

export default fetchCoffee;