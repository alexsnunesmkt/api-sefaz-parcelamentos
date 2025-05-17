import { Router } from "express";
import { getInstallmentById } from "@controllers/installmentByIdController";

const installmentByIdRouter = Router();

installmentByIdRouter.get("/:numeroPessoa/:installmentId", getInstallmentById);

export default installmentByIdRouter;