import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import expressSession from "express-session";
import passport from "passport";
import path from "path";
import { API_ROUTE } from "./shared/routes/api/api.shared";
import apiRouter from "./src/api/api";
import LocalStrategy from "./src/auth/strategies/LocalStrategy";
import { COOKIE_OPTIONS, FRONTEND_PATH, PORT, SESSION_SECRET, STATIC_PATH } from "./src/setup/setupConfig";

if (!SESSION_SECRET) {
     throw new Error(`\n⛔[ERROR] SESSION_SECRET is not provided in .env file\n`);
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
     expressSession({
          resave: true,
          secret: SESSION_SECRET,
          rolling: true,
          saveUninitialized: false,
          cookie: COOKIE_OPTIONS,
     })
);
app.use(express.static(path.resolve(STATIC_PATH)));
app.use(passport.initialize());
app.use(passport.session());
LocalStrategy();

app.use(API_ROUTE, apiRouter);
app.use("/public", express.static(path.resolve(__dirname, "public")));

app.get("*", (_, res) => res.sendFile(FRONTEND_PATH));

app.listen(PORT, () => {
     console.log(`\n⚡[INFO] Server launched at http://localhost:${PORT}\n`);
});
