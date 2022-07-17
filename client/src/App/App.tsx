import { useState } from "react";
import Loader from "../Components/Common/loader/Loader";
import { TopPopupArrayType } from "../Components/Common/TopPopup/ITopPopup";
import TopPopup from "../Components/Common/TopPopup/TopPopup";
import { useAuth } from "../hooks/auth.hook";
import styles from "./App.module.css";
import { useRoutes } from "./App.routes";
import AppContext from "./contexts/App.context";
import AuthContext from "./contexts/AuthContext";

function App() {
     const { login, logout, isAuthenticated } = useAuth();

     const [appTopPopupMesages, setAppTopPopupMesages] = useState<TopPopupArrayType>([]);

     const routes = useRoutes(isAuthenticated === true);

     return (
          <AppContext.Provider value={{ appTopPopupMesages, setAppTopPopupMesages }}>
               <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
                    {appTopPopupMesages.length
                         ? appTopPopupMesages.map((message) => (
                                <TopPopup
                                     key={Math.random()}
                                     text={message.text}
                                     type={message.type}
                                     duration={message.duration}
                                />
                           ))
                         : null}
                    <div className={styles.App}>{isAuthenticated === "unknow" ? <Loader /> : routes}</div>
               </AuthContext.Provider>
          </AppContext.Provider>
     );
}

export default App;
