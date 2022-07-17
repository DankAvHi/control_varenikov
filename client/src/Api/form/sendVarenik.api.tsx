import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { SEND_VARENIK_API, SEND_VARENIK_PHOTO_API, VarenikFormType } from "../../shared/routes/api/api.shared";
import { useHttp } from "../http.hook";

export default function useSendVarenikApi() {
     const { request, error, errorStatus, clientError, clearError } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (clientError) {
               showTopPopup({
                    message: { text: clientError, type: "error" },
                    clearError,
               });
          }
     }, [clientError, errorStatus, clearError, showTopPopup]);

     const sendVarenik = useCallback(
          async (form: VarenikFormType) => {
               const data: { succes: boolean; idvarenik: number } = await request({
                    url: SEND_VARENIK_API,
                    method: "POST",
                    body: { ...form },
               });

               return data;
          },
          [request]
     );

     const sendVarenikImage = useCallback(
          async (form: FormData) => {
               const data = await request({
                    url: SEND_VARENIK_PHOTO_API,
                    method: "POST",
                    body: form,
                    isJSON: false,
               });

               return data;
          },
          [request]
     );

     return { sendVarenik, sendVarenikImage, error };
}
