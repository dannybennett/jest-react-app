import http from "./http-common";
import IImage from "../types/image.type";

const fetchImage = async (): Promise<IImage> => {
  const response = await http.get<IImage>("/coffee");
  return response.data;
};

export default fetchImage;
