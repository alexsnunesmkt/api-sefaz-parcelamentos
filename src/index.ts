import express, { Request, Response } from "express";
import authRoutes from "@routes/auth";
import accountRoute from "@routes/account";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/account", accountRoute)

app.get("/", (req: Request, res: Response) => {
  res.send("API rodando com Node.js e TypeScript!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});