import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";
import prisma from "../../setup/setupPrismaConnection";

const deleteVarenikController: RequestHandler = async (req, res) => {
     try {
          const { id } = req.body;

          if (!id) {
               res.status(401).json({ error: "wrong id" });
          }

          await prisma.varenik.delete({ where: { idvarenik: Number(id) } });

          res.json({ succes: true });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default deleteVarenikController;
