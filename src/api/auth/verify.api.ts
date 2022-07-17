import { Router } from "express";
import verifyController from "../../controllers/auth/verify.controller";

const verifyRouter = Router();

verifyRouter.get("/", verifyController);

export default verifyRouter;
