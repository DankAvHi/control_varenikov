import { RequestHandler } from "express";
import { VarenikFormType } from "../../../shared/routes/api/api.shared";
import requestServerError from "../../errors/requestServerError.error";
import prisma from "../../setup/setupPrismaConnection";

const sendVarenikController: RequestHandler = async (req, res) => {
     try {
          const {
               age,
               boobsSize,
               clothingSize,
               hairColor,
               height,
               metro,
               name,
               oneHourPrice,
               race,
               shoeSize,
               twoHourPrice,
               weight,
          }: VarenikFormType = req.body;

          const varenik = await prisma.varenik.create({
               data: {
                    age: age,
                    boobsSize: boobsSize,
                    clothingSize: clothingSize,
                    hairColor: hairColor,
                    height: height,
                    metro: metro,
                    name: name,
                    oneHourPrice: oneHourPrice,
                    race: race,
                    shoeSize: shoeSize,
                    twoHourPrice: twoHourPrice,
                    weight: weight,
               },
          });

          res.json({ succes: true, idvarenik: varenik.idvarenik });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default sendVarenikController;
