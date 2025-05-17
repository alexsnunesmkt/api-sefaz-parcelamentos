import { Router } from "express";
import { generateParcelController } from "@controllers/generateParcelController";

const generateParcelRoute = Router();

generateParcelRoute.get("/:installmentId/:parcelAmount/:date/:numeroPessoa", generateParcelController);

export default generateParcelRoute;