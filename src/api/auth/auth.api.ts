import { Router } from "express";
import { LOGIN_ROUTE, VERIFY_ROUTE } from "../../../shared/routes/api/api.shared";
import loginRouter from "./login.api";
import verifyRouter from "./verify.api";

const authRouter = Router();

authRouter.use(LOGIN_ROUTE, loginRouter);
authRouter.use(VERIFY_ROUTE, verifyRouter);

export default authRouter;
