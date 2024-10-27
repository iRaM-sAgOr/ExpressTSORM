import { Express } from "express";
import personRouter from "./person.route";
const setupRoutes = (app: Express) => {
  app.use("/person", personRouter);
};

export default setupRoutes;
