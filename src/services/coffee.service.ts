
import http from "./http-common";
import ICoffee from "../types/coffee.type";

const fetchCoffee = async (): Promise<Array<ICoffee>> => {
    return await http.get<Array<ICoffee>>('/random.json');
}

export default fetchCoffee;