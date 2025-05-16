import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export interface AuthRequestData {
  username: string;
  password: string;
  rememberMe: boolean;
}

const authRoute = process.env.AUTH_ROUTE;

export async function authenticateService(authData: AuthRequestData) {
  // Substitua pela URL real da API externa
  const externalApiUrl = `${authRoute}`;
  const response = await axios.post(externalApiUrl, authData);
  return response.data;
}