import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import securityResultRoutes from "./routes/securityResult";

const app = express();

app.use(express.json());

if (!process.env.prod) {
  app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

    next();
  });
}

app.use("/securityResults", securityResultRoutes);

mongoose
  .connect(
    `mongodb+srv://guardrailsUser:${process.env.MONGO_PASSWORD}@cluster0.12o3g.mongodb.net/guardrails-ssr?retryWrites=true&w=majority`
  )
  .then(async () => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
