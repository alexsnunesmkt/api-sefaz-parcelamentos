import axios from "axios";
import dotenv from "dotenv";
import { AuthRequestData } from "@interfaces/IAuthData";
import { AuthModel } from "@models/authModel";
dotenv.config();

const authRoute = process.env.AUTH_ROUTE;

export async function authenticateService(authData: AuthRequestData): Promise<AuthModel> {
  // Substitua pela URL real da API externa
  const externalApiUrl = `${authRoute}`;
  const response = await axios.post(externalApiUrl, authData);
  const data = new AuthModel(response.data.id_token);
  return data;
}