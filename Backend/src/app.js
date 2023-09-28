import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

//init
dotenv.config();
const app = express();

// Import routes
import userRoutes from "./routes/users.routes.js";
import paperRoutes from "./routes/papers.routes.js";
import documentoRoutes from "./routes/documentos.routes.js";
import cuentasRoutes from "./routes/cuentas.routes.js";
import iniciativaRoutes from "./routes/iniciativasRoutes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Configura CORS
app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/papers", paperRoutes);
app.use("/api/documentos", documentoRoutes);
app.use("/api/cuentas", cuentasRoutes);
app.use("/api/iniciativas", iniciativaRoutes);

// cuenta de prueba

export default app;
