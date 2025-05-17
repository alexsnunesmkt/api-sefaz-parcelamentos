import axios from "axios";
import dotenv from "dotenv";
import { AccountRequestData } from "@interfaces/IAccountData"
dotenv.config();

const accountRoute = process.env.ACCOUNT_ROUTE;

export async function getAccountService(token: AccountRequestData) {
  const externalApiUrl = `${accountRoute}`;
  const response = await axios.get(externalApiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
}