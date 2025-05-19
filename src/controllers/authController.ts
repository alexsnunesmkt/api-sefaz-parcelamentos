import { Request, Response } from "express";
import { authenticateService } from "@services/authService";
import { AuthRequestData } from "@interfaces/IAuthData";
import { AuthModel } from "@models/authModel";

export async function authenticate(req: Request, res: Response): Promise<AuthModel | any> {
  try {
    const data: AuthRequestData = req.body;
    data.rememberMe = false;
    if (!data.username || !data.password) {
      return res.status(400).json({
        code: 400,
        message: "Requisição inválida",
        error: "Dados de autenticação inválidos"
      });
    }
    const result: AuthModel = await authenticateService(data);
    return res.status(200).json(result);
  } catch (error: any) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    } else {
      return res.status(500).json({ message: "Erro ao autenticar usuário", error: error.message });
    }
  }
}