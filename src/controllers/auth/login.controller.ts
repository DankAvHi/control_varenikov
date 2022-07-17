import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";

const loginController: RequestHandler = async (req, res) => {
     try {
          res.json({ succes: true });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default loginController;
