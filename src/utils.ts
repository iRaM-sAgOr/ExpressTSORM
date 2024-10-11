import express, { Express } from "express";
import cors, { CorsOptions } from "cors";
import setupRoutes from "./routes";

export const expressSetup = (app: Express) => {
  const corsOptions: CorsOptions = {
    origin: "*",
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  setupRoutes(app);
};
