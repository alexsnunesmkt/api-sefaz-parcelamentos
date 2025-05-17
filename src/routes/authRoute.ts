import { Router } from "express";
import { authenticate } from "@controllers/authController";

const router = Router();

router.post("/", authenticate);

export default router;