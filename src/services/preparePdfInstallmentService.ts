import { PrepaePdfInstallmentRequestData } from "@interfaces/IPreparePdfInstallmentData";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const preparePdfInstallmentRoute = process.env.PREPARE_PDF_INSTALLMENT_ROUTE;

export async function preparePdfInstallmentService(data: PrepaePdfInstallmentRequestData) {
  const externalApiUrl = `${preparePdfInstallmentRoute}/${data.installmentId}/${data.parcelAmount}/${data.date}`;
  const response = await axios.get(externalApiUrl, {
    headers: {
      "Authorization": `Bearer ${data.token}`,
      "X-Pessoadetrabalho": `${data.personNumber}`
    },
  });
  return response.data;
}