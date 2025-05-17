import axios from "axios";
import dotenv from "dotenv";
import { GenerateParcelData } from "@interfaces/IGenerateParcelData";
dotenv.config();

const generateParcelRoute = process.env.GENERATE_PARCEL_INSTALLMENT_ROUTE as string;

export async function generateParcelService(requestData: GenerateParcelData): Promise<void> {
  const externalApiUrl = `${generateParcelRoute}/${requestData.installmentId}/${requestData.parcelAmount}/${requestData.date}`;
  const response = await axios.get(externalApiUrl, {
    headers: {
      "Authorization": `Bearer ${requestData.token}`,
      "X-Pessoadetrabalho": `${requestData.numeroPessoa}`,
    },
  });
  return response.data;
}