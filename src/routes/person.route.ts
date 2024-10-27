import { Router } from "express";
import PersonService from "../services/person.service";

const personRouter = Router();

personRouter.get("/", async (req, res) => {
  const allPersons = await PersonService.findAll();
  res.send(allPersons);
});

personRouter.post("/", async (req, res) => {
  res.send(PersonService.create(req.body));
});

export default personRouter;
