import http from "./http-common";
import IAppliance from "../types/appliance.type";

const fetchAppliance = async (): Promise<Array<IAppliance>> => {
  const response = await http.get<Array<IAppliance>>("/appliances");
  return response.data;
};

export default fetchAppliance;
