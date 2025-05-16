import { Request, Response } from "express";
import { authenticateService } from "@services/authService";

export async function authenticate(req: Request, res: Response) {
  try {
    const result = await authenticateService(req.body);
    res.status(200).json(result);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Erro ao autenticar", error: error.message });
    }
  }
}