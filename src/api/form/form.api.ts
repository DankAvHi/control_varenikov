import { Router } from "express";
import {
     DELETE_VARENIK_ROUTE,
     GET_VARENIK_ROUTE,
     SEND_VARENIK_PHOTO_ROUTE,
     SEND_VARENIK_ROUTE,
} from "../../../shared/routes/api/api.shared";
import verify from "../../middlewares/auth/verify.middleware";
import deleteVarenikRouter from "./deleteVarenik.api";
import getVarenikRouter from "./getVarenik.api";
import sendVarenikRouter from "./sendVarenik.api";
import sendVarenikPhotoRouter from "./sendVarenikPhoto.api";

const formRouter = Router();

formRouter.use(verify);

formRouter.use(SEND_VARENIK_ROUTE, sendVarenikRouter);
formRouter.use(SEND_VARENIK_PHOTO_ROUTE, sendVarenikPhotoRouter);
formRouter.use(GET_VARENIK_ROUTE, getVarenikRouter);
formRouter.use(DELETE_VARENIK_ROUTE, deleteVarenikRouter);

export default formRouter;
