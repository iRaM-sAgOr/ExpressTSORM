import { Express } from "express";
import personRouter from "./person.route";
const setupRoutes = (app: Express) => {
  app.use("/person", personRouter);

  app.get('/', async (req, res) => {
    res.send({ status: 200, message: 'server up' })
  })
};

export default setupRoutes;
