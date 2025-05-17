import axios from "axios";
import dotenv from "dotenv";
import { AccountRequestData } from "@interfaces/IAccountData"
import { InstallmentsRequestData } from "@interfaces/IInstallmentsData"
dotenv.config();

const installmentsRoute = process.env.INSTALLMENTS_ROUTE;

export async function getInstallmentsService(token: AccountRequestData, numeroPessoa: InstallmentsRequestData) {
  const externalApiUrl = `${installmentsRoute}`;
  const response = await axios.post(externalApiUrl, {
    "placa": "",
    "renavam": ""
  }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-Pessoadetrabalho': `${numeroPessoa}`
    }
  });
  return response.data;
}