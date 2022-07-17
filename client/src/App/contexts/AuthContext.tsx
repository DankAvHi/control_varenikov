import React from "react";

interface IAuthContext {
     login: (token: string) => void;
     logout: () => void;

     isAuthenticated: boolean | "unknow";
}

const defaultState: IAuthContext = {
     login: (token: string) => {},
     logout: () => {},

     isAuthenticated: false,
};

const AuthContext = React.createContext<IAuthContext>(defaultState);
export default AuthContext;
