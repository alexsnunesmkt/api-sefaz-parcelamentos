import { Request, Response } from "express";
import { getInstallmentsService } from "@services/installmentsService";
import { InstallmentsRequestData } from "@interfaces/IInstallmentsData";
import { AccountRequestData } from "@interfaces/IAccountData";

export async function getInstallments(req: Request, res: Response): Promise<void> {
  try {
    const numeroPessoa: InstallmentsRequestData = req.params.numeroPessoa as unknown as InstallmentsRequestData;
    const token: AccountRequestData = req.headers.authorization as unknown as AccountRequestData;
    if (!numeroPessoa) {
      res.status(401).json({ message: "Número da pessoa de trabalho não fornecido" });
    }
    if (!token) {
      res.status(401).json({ message: "Token não fornecido" });
    }
    const response = await getInstallmentsService(token, numeroPessoa);
    res.status(200).json(response);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Erro ao buscar dados da conta do usuário", error: error.message });
    }
  }
}