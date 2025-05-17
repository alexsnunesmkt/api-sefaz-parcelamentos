import { Request, Response } from "express";
import { generateParcelService } from "@services/generateParcelService";
import { GenerateParcelData } from "@interfaces/IGenerateParcelData";

export async function generateParcelController(req: Request, res: Response): Promise<void> {
  try {
    
    // Informações da requisição
    const token: string = req.headers.authorization as string;
    const numeroPessoa: string = req.params.numeroPessoa as string;
    const date: string = req.params.date;
    const parcelAmount: string = req.params.parcelAmount;
    const installmentId: string = req.params.installmentId;

    const data: GenerateParcelData = {
      installmentId: installmentId,
      date: date,
      parcelAmount: parcelAmount,
      token: token,
      numeroPessoa: numeroPessoa,
    };

    if (!token) {
      res.status(401).json({ message: "Token não fornecido" });
    }
    const response = await generateParcelService(data);
    res.status(200).json(response)
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Erro ao buscar dados da conta do usuário", error: error.message });
    }
  }
}