import { Router } from "express";
import getVarenikController from "../../controllers/form/getVarenik.controller";

const getVarenikRouter = Router();

getVarenikRouter.post("/", getVarenikController);

export default getVarenikRouter;
