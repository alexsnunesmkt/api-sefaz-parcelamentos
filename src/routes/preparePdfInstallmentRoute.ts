import { Router } from "express";
import { preparePdfInstallmentController } from "@controllers/preparePdfInstallmentController";

const preparePdfInstallmentRoute = Router();

preparePdfInstallmentRoute.get("/:installmentId/:parcelAmount/:date/:personNumber", preparePdfInstallmentController);

export default preparePdfInstallmentRoute;