import { useCallback, useEffect, useState } from "react";
import { api } from "../Api/index.api";

export const useAuth = () => {
     const { verify, error } = api().useVerifyApi();
     const [isAuthenticated, setIsAuthenticated] = useState<boolean | "unknow">("unknow");

     const login = useCallback(() => {
          setIsAuthenticated(true);
     }, []);

     const logout = useCallback(() => {
          setIsAuthenticated(false);
     }, []);

     useEffect(() => {
          const verifyToken = async () => {
               try {
                    const data = await verify();

                    if (data.succes) {
                         login();
                         return true;
                    } else {
                         logout();
                         return false;
                    }
               } catch (e) {
                    console.error(e);
                    logout();
               }
          };

          verifyToken().then((succes) => {
               if (succes) {
                    setInterval(() => {
                         verifyToken();
                    }, 60 * 5 * 1000);
               }
          });

          // eslint-disable-next-line
     }, []);

     return { login, logout, isAuthenticated, error };
};
