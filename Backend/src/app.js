import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from 'dotenv';

//init
dotenv.config();
const app = express();

// Import routes
import userRoutes from "./routes/users.routes.js";
import paperRoutes from "./routes/papers.routes.js";
import documentoRoutes from "./routes/documentos.routes.js";
import cuentasRoutes from "./routes/cuentas.routes.js";
import iniciativaRoutes from "./routes/iniciativasRoutes.js";
import personajuridicaRoutes from "./routes/personajuridicaRoutes.js";
import programaRoutes from "./routes/programasRoutes.js";
import ambitodominioareaRoutes from "./routes/ambitodominioareasRoutes.js";
import comunaRoutes from "./routes/comunasRoutes.js";
import personanaturalRoutes from "./routes/personanaturalsRoutes.js";
import localidadterritorioRoutes from "./routes/localidadterritorio.routes.js";
import espacioculturalRoutes from "./routes/espaciocultural.routes.js"
import tipoespacioculturalRoutes from "./routes/tipoespaciocultural.routes.js";
import objetivoRoutes from "./routes/objetivo.routes.js"


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
app.use("/api/personajuridicas", personajuridicaRoutes);
app.use("/api/programas", programaRoutes);
app.use("/api/ambitodominioareas", ambitodominioareaRoutes);
app.use("/api/comunas", comunaRoutes);
app.use("/api/personanaturals", personanaturalRoutes);
app.use("/api/localidadesterritorio", localidadterritorioRoutes)
app.use("/api/espaciosculturales", espacioculturalRoutes);
app.use("/api/tiposespaciocultural", tipoespacioculturalRoutes);
app.use("/api/objetivos", objetivoRoutes);

export default app;
