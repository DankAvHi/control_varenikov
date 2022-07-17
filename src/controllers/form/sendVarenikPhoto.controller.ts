import { RequestHandler } from "express";
import fs from "fs";
import path from "path";
import requestServerError from "../../errors/requestServerError.error";
import prisma from "../../setup/setupPrismaConnection";

const sendVarenikPhotoController: RequestHandler = async (req, res) => {
     try {
          const { file } = req;
          if (!file) {
               return res.status(401).json({ error: "no file sended" });
          }

          const image = process.env.PUBLIC_IMAGES_ADRESS + file.filename;

          const { idvarenik } = req.body;

          const varenik = await prisma.varenik.findUnique({ where: { idvarenik: Number(idvarenik) } });

          if (varenik && varenik.photo) {
               const fileName = varenik.photo.split("/")[varenik.photo.split("/").length - 1];
               const filePath = path.join(__dirname, "/public/images", fileName);

               fs.unlink(filePath, (err) => {
                    console.log(err);
               });
          }

          await prisma.varenik.update({
               where: {
                    idvarenik: Number(idvarenik),
               },
               data: { photo: image },
          });

          res.json({ succes: true });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default sendVarenikPhotoController;
