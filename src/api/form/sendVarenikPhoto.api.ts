import { Router } from "express";
import sendVarenikPhotoController from "../../controllers/form/sendVarenikPhoto.controller";
import { upload } from "../../middlewares/upload/upload.middleware";

const sendVarenikPhotoRouter = Router();

sendVarenikPhotoRouter.post("/", upload.single("photo"), sendVarenikPhotoController);

export default sendVarenikPhotoRouter;
