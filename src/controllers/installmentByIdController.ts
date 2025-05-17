import { Request, Response } from "express";
import { getInstallmentByIdService } from "@services/installmentByIdService";
import { AccountRequestData } from "@interfaces/IAccountData";
import { InstallmentsRequestData } from "@interfaces/IInstallmentsData";
import { InstallmentByIdRequestData } from "@interfaces/IInstallmentByIdData";

export async function getInstallmentById(req: Request, res: Response): Promise<void> {
  try {
    const token: AccountRequestData = req.headers.authorization as unknown as AccountRequestData;
    const numeroPessoa: InstallmentsRequestData = req.params.numeroPessoa as unknown as InstallmentsRequestData;
    const installmentId: InstallmentByIdRequestData = req.params.installmentId as unknown as InstallmentByIdRequestData;
    if (!token) {
      res.status(401).json({ message: "Token não fornecido" });
    }
    if (!numeroPessoa) {
      res.status(401).json({ message: "Número da pessoa não fornecido" });
    }
    if (!installmentId) {
      res.status(401).json({ message: "Id do parcelamento não fornecido" });
    }
    const response = await getInstallmentByIdService(token, numeroPessoa, installmentId);
    res.status(200).json(response);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Erro ao buscar dados da conta do usuário", error: error.message });
    }
  }
}