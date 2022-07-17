import { Router } from "express";
import sendVarenikController from "../../controllers/form/sendVarenik.controller";

const sendVarenikRouter = Router();

sendVarenikRouter.post("/", sendVarenikController);

export default sendVarenikRouter;
