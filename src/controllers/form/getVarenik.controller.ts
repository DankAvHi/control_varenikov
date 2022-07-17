import { RequestHandler } from "express";
import { GetVarenikiRequestType } from "../../../shared/routes/api/api.shared";
import requestServerError from "../../errors/requestServerError.error";
import prisma from "../../setup/setupPrismaConnection";

const getVarenikController: RequestHandler = async (req, res) => {
     try {
          const { sendAll = true, page, count = 9 }: GetVarenikiRequestType = req.body;

          if (sendAll) {
               const vareniki = await prisma.varenik.findMany();
               return res.json({ succes: true, vareniki: vareniki });
          }
          if (typeof page === "undefined" || page === null) {
               return res.status(401).json({ error: "wrong page" });
          }

          const skip = Number(page) * Number(count);

          const varenikiCount = await prisma.varenik.count();

          let pages = Math.floor(varenikiCount / count);
          if (varenikiCount % count > 0) {
               pages++;
          }

          const vareniki = await prisma.varenik.findMany({
               skip: skip,
               take: count,
          });

          res.json({ succes: true, vareniki, pages });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default getVarenikController;
