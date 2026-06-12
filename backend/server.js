import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/leads",
  leadRoutes
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    console.log("MongoDB Connected")
  );

app.listen(
  process.env.PORT || 5000,
  () =>
    console.log(
      "Server Running"
    )
);