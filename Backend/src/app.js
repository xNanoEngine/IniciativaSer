import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

//init
dotenv.config();
const app = express();

// Import routes
import accountsRoutes from "./routes/accounts.routes.js";
import initiativesRoutes from "./routes/initiatives.routes.js";
import authoritationRoutes from "./routes/authoritation.routes.js";
import programsRoutes from "./routes/programs.routes.js";
import documentsRoutes from "./routes/documents.routes.js";
import accountInitiativesRoutes from "./routes/accountInitiatives.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Configura CORS
app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/api/cuentas", accountsRoutes);
app.use("/api/iniciativas", initiativesRoutes);
app.use("/api/authoritation", authoritationRoutes);
app.use("/api/programas", programsRoutes);
app.use("/api/documentos", documentsRoutes);
app.use("/api/iniciativascuenta", accountInitiativesRoutes);
// cuenta de prueba

export default app;
