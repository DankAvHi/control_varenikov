import { createContext } from "react";
import { TopPopupArrayType } from "../../Components/Common/TopPopup/ITopPopup";

type AppContextType = {
     appTopPopupMesages: TopPopupArrayType;
     setAppTopPopupMesages: React.Dispatch<React.SetStateAction<TopPopupArrayType>>;
};

const initialState: AppContextType = {
     appTopPopupMesages: [],
     setAppTopPopupMesages: () => {},
};
const AppContext = createContext(initialState);
export default AppContext;
