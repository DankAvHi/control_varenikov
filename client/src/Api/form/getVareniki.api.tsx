import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { GetVarenikiRequestType, GET_VARENIK_API, VarenikiType } from "../../shared/routes/api/api.shared";
import { useHttp } from "../http.hook";

export default function useGetVarenikApi() {
     const { request, loading, errorStatus, clientError, clearError } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (clientError) {
               showTopPopup({
                    message: { text: clientError, type: "error" },
                    clearError,
               });
          }
     }, [clientError, errorStatus, clearError, showTopPopup]);

     const getVarenik = useCallback(
          async ({ page, count, sendAll }: GetVarenikiRequestType) => {
               const data: { succes: boolean; vareniki: VarenikiType; pages: number } = await request({
                    url: GET_VARENIK_API,
                    method: "POST",
                    body: { page, count, sendAll },
               });

               return data;
          },
          [request]
     );

     return { getVarenik, loading };
}
