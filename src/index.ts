import express, { Request, Response } from "express";
import authRoutes from "@routes/authRoute";
import accountRoute from "@routes/accountRoute";
import personRoute from "@routes/personRoute";
import installmentsRoute from "@routes/installmentsRoute";
import installmentByIdRoute from "@routes/installmentByIdRoute";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/account", accountRoute)
app.use("/api/v1/person", personRoute)
app.use("/api/v1/installments", installmentsRoute);
app.use("/api/v1/installmentById", installmentByIdRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("API rodando com Node.js e TypeScript!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});