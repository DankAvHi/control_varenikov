import { useContext } from "react";
import AppContext from "../../../App/contexts/App.context";
import { TopPopupHookPropsType } from "./ITopPopup";

export default function useTopPopup() {
     const { setAppTopPopupMesages, appTopPopupMesages } = useContext(AppContext);

     const showTopPopup = ({
          message = { text: "", type: "warning", duration: 1500 },
          clearError = null,
     }: TopPopupHookPropsType) => {
          const isExisted = !!appTopPopupMesages.filter(
               (value) => value.text === message.text && value.type === message.type
          ).length;

          if (isExisted) {
               return;
          }

          setAppTopPopupMesages((prev) => {
               const messages = [...prev];
               messages.push(message);
               return messages;
          });

          const messageTimeout = setTimeout(
               () => {
                    if (clearError !== null) {
                         clearError();
                    }

                    setAppTopPopupMesages((prev) =>
                         prev.filter((value) => value.text !== message.text && value.type !== message.type)
                    );

                    clearTimeout(messageTimeout);
               },
               message.duration ? message.duration : 1500
          );
     };
     return { showTopPopup };
}
