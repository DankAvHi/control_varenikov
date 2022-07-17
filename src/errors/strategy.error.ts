import { StrategyErrorType } from "./IError";

const serverError: StrategyErrorType = async (e, done) => {
     console.log(`❌ [server] ${e}`);
     return done(e, false);
};

export default serverError;
