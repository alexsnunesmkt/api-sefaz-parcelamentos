import { Request, Response } from "express";
import { PersonRequestData } from "@interfaces/IPersonData";
import { AccountRequestData } from "@interfaces/IAccountData";
import { getPersonService } from "@services/personService";

export async function getPerson(req: Request, res: Response): Promise<void> {
  try {
    const token: AccountRequestData = req.headers.authorization as unknown as AccountRequestData;
    const numeroDocumento: PersonRequestData = req.params.person as unknown as PersonRequestData;
    if (!token) {
      res.status(401).json({ message: "Token não fornecido" });
    }
    if (!numeroDocumento) {
      res.status(401).json({ message: "Número de documento não fornecido" });
    }
    const response = await getPersonService(numeroDocumento, token);
    res.status(200).json(response);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Erro ao buscar dados da conta do usuário", error: error.message });
    }
  }
}