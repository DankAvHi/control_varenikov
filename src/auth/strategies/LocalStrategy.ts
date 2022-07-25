import passport from "passport";
import { Strategy } from "passport-local";
import serverError from "../../errors/strategy.error";
import prisma from "../../setup/setupPrismaConnection";

const LocalStrategy = () => {
     passport.use(
          new Strategy(
               {
                    usernameField: "login",
                    passwordField: "password",
               },
               async (login, password, done) => {
                    try {
                         const user = await prisma.user.findFirst({
                              where: {
                                   login: login,
                              },
                         });

                         if (!user) {
                              return done(null, false, { message: "Login or password is incorrect" });
                         }

                         const isMatch = password === user.password;

                         if (isMatch) {
                              return done(null, user);
                         }
                         return done(null, false, { message: "Login or password is incorrect" });
                    } catch (e) {
                         serverError(e, done);
                    }
               }
          )
     );

     passport.serializeUser((user, done) => {
          done(null, user.iduser);
     });
     passport.deserializeUser((iduser: number, done) => {
          prisma.user
               .findUnique({
                    where: {
                         iduser: iduser,
                    },
               })
               .then((user) => {
                    done(null, user);
               })
               .catch((e) => serverError(e, done));
     });
};
export default LocalStrategy;
