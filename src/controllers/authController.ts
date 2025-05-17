import { Request, Response } from "express";
import { authenticateService } from "@services/authService";
import { AuthRequestData } from "@interfaces/IAuthData";

export async function authenticate(req: Request, res: Response): Promise<void> {
  try {
    const data: AuthRequestData = req.body;
    data.rememberMe = false
    if (!data.username || !data.password) {
      res.status(400).json({ message: "Credenciais inválidas" });
    }
    const result = await authenticateService(data);
    res.status(200).json(result);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Erro ao autenticar", error: error.message });
    }
  }
}