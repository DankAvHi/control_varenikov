import { CorsOptions } from "cors";
import dotenv from "dotenv";

dotenv.config();

const corsOptions: CorsOptions = {
     origin: function (origin: string | undefined, callback: Function) {
          const whitelist = process.env.WHITELISTED_DOMAINS ? process.env.WHITELISTED_DOMAINS.split(",") : [];

          if (!origin || whitelist.indexOf(origin) !== -1) {
               callback(null, true);
          } else {
               callback(console.log(`\n⚠️ [server] Attempt to fetch from unknown origin: ${origin}\n`));
          }
     },

     credentials: true,
};

export default corsOptions;
