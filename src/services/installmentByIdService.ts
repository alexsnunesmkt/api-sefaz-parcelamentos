import axios from "axios";
import dotenv from "dotenv";
import { InstallmentByIdRequestData } from "@interfaces/IInstallmentByIdData";
import { AccountRequestData } from "@interfaces/IAccountData";
import { InstallmentsRequestData } from "@interfaces/IInstallmentsData"
dotenv.config();

const installmentByIdRoute = process.env.INSTALLMENT_BY_ID_ROUTE as string;

export async function getInstallmentByIdService(
  token: AccountRequestData, numeroPessoa: InstallmentsRequestData, installmentId: InstallmentByIdRequestData): Promise<any> {
  const externalApiUrl = `${installmentByIdRoute}/${installmentId}`;
  const response = await axios.get(externalApiUrl, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "X-Pessoadetrabalho": `${numeroPessoa}`
    },
  });
  return response.data;
}