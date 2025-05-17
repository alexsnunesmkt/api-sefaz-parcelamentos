import { Router } from "express";
import { generatePdfInstallmentController } from "@controllers/generatePdfInstallmentController";

const router = Router();

router.post("/:personNumber", generatePdfInstallmentController);

export default router;