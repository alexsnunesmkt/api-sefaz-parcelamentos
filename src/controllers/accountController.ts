import { Request, Response } from "express";
import { getAccountService } from "@services/accountService";

export async function getAccount(req: Request, res: Response): Promise<void> {
  try {
    const token: string | undefined = req.headers.authorization;
    if (!token) {
      res.status(401).json({ message: "Token não fornecido" });
    }
    // Chama o serviço para buscar os dados da conta do usuário a partir da API externa usando o token de autorização
    const response = await getAccountService(token!);
    res.status(200).json(response);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Erro ao buscar dados da conta do usuário", error: error.message });
    }
  }
}