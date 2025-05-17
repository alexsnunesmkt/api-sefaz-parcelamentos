import axios from "axios";
import dotenv from "dotenv";
import { PersonRequestData } from "@interfaces/IPersonData";
import { AccountRequestData } from "@interfaces/IAccountData";
dotenv.config();''

const personRoute: string | undefined = process.env.PERSON_ROUTE;

export async function getPersonService(numeroDocumento: PersonRequestData, token: AccountRequestData) {
  const externalApiUrl = `${personRoute}?numeroDocumento=${numeroDocumento}`;
  const response = await axios.get(externalApiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
}