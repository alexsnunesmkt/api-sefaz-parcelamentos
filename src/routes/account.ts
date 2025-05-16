import { Router } from "express";
import { getAccount } from "@controllers/accountController";

const router = Router();

router.get("/", getAccount);

export default router;