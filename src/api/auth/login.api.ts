import { Router } from "express";
import passport from "passport";
import loginController from "../../controllers/auth/login.controller";

const loginRouter = Router();

loginRouter.post("/", passport.authenticate("local"), loginController);

export default loginRouter;
