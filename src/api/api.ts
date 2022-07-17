import { Router } from "express";
import { AUTH_ROUTE, FORM_ROUTE } from "../../shared/routes/api/api.shared";
import authRouter from "./auth/auth.api";
import formRouter from "./form/form.api";

const apiRouter = Router();

apiRouter.use(AUTH_ROUTE, authRouter);
apiRouter.use(FORM_ROUTE, formRouter);

export default apiRouter;
