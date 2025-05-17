import { Router } from "express";
import { getInstallments } from "@controllers/installmentsController"

const installmentsRouter = Router();

installmentsRouter.get("/:numeroPessoa", getInstallments);

export default installmentsRouter;