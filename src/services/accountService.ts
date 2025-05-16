import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const accountRoute = process.env.ACCOUNT_ROUTE;

export async function getAccountService(token: string) {
  const externalApiUrl = `${accountRoute}`;
  const response = await axios.get(externalApiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
}