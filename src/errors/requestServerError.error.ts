import { RequestErrorType } from "./IError";

const requestServerError: RequestErrorType = async (e, res) => {
     if (!res) {
          return console.log(`❌ [server] ${e}`);
     }
     res.statusMessage = "Server Error";
     res.status(500).json({ error: "Server Error" });
     console.log(`❌ [server] ${e}`);
};

export default requestServerError;
