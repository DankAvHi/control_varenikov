import dotenv from "dotenv";
import path from "path";
dotenv.config();

export const {
     PORT = 8000,
     NODE_ENV = "production",
     CLIENT_URL = "http://localhost:3000",
     URL = "http://localhost:8000",
     SESSION_SECRET,
     REFRESH_TOKEN_EXPIRY,
     JWT_SECRET,
     SESSION_EXPIRY,
     REFRESH_TOKEN_SECRET,
} = process.env;

if (!REFRESH_TOKEN_EXPIRY) {
     throw new Error(`\n⛔[ERROR] REFRESH_TOKEN_EXPIRY is not provided in .env file\n`);
}

export const STATIC_PATH =
     NODE_ENV == "development" || process.argv[2] === "development"
          ? path.resolve("client", "build")
          : path.resolve("public");
export const FRONTEND_PATH =
     NODE_ENV == "development" || process.argv[2] === "development"
          ? path.resolve("client", "build", "index.html")
          : path.resolve("public", "index.html");

export const HOME_PAGE_ROUTE = NODE_ENV == "development" || process.argv[2] === "development" ? URL : URL;

export const COOKIE_OPTIONS = {
     // httpOnly: true,
     // secure: true,
     signed: true,
     maxAge: eval(REFRESH_TOKEN_EXPIRY),
     // sameSite: "none",
};

export const NOT_EXPIRED_COOKIE_OPTIONS = {
     // httpOnly: true,
     // secure: true,
     signed: true,
     // sameSite: "none",
};
