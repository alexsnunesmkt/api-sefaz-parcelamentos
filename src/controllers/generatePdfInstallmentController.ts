import { Request, Response } from 'express';
import { generatePdfInstallmentService } from '@services/generatePdfInstallmentService';
import { GeneratePdfInstallmentRequestData } from '@interfaces/IGeneratePdfInstallmentData';

export async function generatePdfInstallmentController(req: Request, res: Response): Promise<void> {
  try {
    
    // Dados da requisição
    const { darInfo }: any = req.body;
    const personNumber: string = req.params.personNumber as string;
    const token: string = req.headers.authorization as unknown as string;

    // Validação do número da pessoa de trabalho
    if (!personNumber) {
      res.status(401).json("Erro, pessoa de trabalho não informada");
    }

    // Validação do token
    if (!token) {
      res.status(401).json("Erro, token inválido ou não informado");
    }

    const requestData: GeneratePdfInstallmentRequestData = {
      darInfo,
      personNumber,
      token
    }
    
    const response = await generatePdfInstallmentService(requestData);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=installment.pdf');
    res.status(200).send(Buffer.from(response));
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Erro ao buscar dados da conta do usuário', error: error.message });
    }
  }
}