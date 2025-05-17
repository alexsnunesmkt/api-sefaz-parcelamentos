import axios from "axios";
import dotenv from "dotenv";
import { GeneratePdfInstallmentRequestData } from "@interfaces/IGeneratePdfInstallmentData";
dotenv.config();

const generatepdfInstallment = process.env.GENERATE_PDF_INSTALLMENT_ROUTE as string;

export async function generatePdfInstallmentService(requestData: GeneratePdfInstallmentRequestData): Promise<any> {
  const externalApiUrl = generatepdfInstallment;
  const response = await axios.post(externalApiUrl, {
    "informacoesDar": [
      {
        "numeroProcessamento": `${requestData.darInfo.processNumber}`,
        "dataVencimento": `${requestData.darInfo.date}T00:00:00-03:00`
      }
    ]
  }, {
    headers: {
      "Authorization": `Bearer ${requestData.token}`,
      "X-Pessoadetrabalho": `${requestData.personNumber}`
    },
    responseType: "arraybuffer"
  });
  return response.data;
}