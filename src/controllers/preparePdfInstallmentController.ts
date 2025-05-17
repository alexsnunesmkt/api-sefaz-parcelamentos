import { Request, Response } from "express";
import { preparePdfInstallmentService } from "@services/preparePdfInstallmentService";
import { PrepaePdfInstallmentRequestData } from "@interfaces/IPreparePdfInstallmentData";

export async function preparePdfInstallmentController(req: Request, res: Response): Promise<void> {
  try {

    // Dados da requisição
    const { installmentId, parcelAmount, date, personNumber } = req.params as unknown as PrepaePdfInstallmentRequestData;
    const token = req.headers.authorization as unknown as PrepaePdfInstallmentRequestData;
    
    // Validação dos dados
    if (!installmentId || !parcelAmount || !date || !personNumber) {
      res.status(400).json({ message: "Dados da requisição incompletos" });
    }

    // Validação do token
    if (!token) {
      res.status(401).json({ message: "Token não fornecido" });
    }

    const requestData: PrepaePdfInstallmentRequestData = {
      installmentId,
      parcelAmount,
      date,
      token: token as unknown as string,
      personNumber,
    };

    const response = await preparePdfInstallmentService(requestData);
    res.status(200).json(response);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Erro ao buscar dados da conta do usuário", error: error.message });
    }
  }
}