import { Router } from "express";
import deleteVarenikController from "../../controllers/form/deleteVarenik.controller";

const deleteVarenikRouter = Router();

deleteVarenikRouter.post("/", deleteVarenikController);

export default deleteVarenikRouter;
