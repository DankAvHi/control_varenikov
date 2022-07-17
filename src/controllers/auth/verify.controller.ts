import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";

const verifyController: RequestHandler = async (req, res, next) => {
     try {
          if (req.isAuthenticated()) {
               return res.json({ succes: true });
          }
          return res.status(403).json({ error: "unauth" });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default verifyController;
