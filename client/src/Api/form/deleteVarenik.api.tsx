import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { DELETE_VARENIK_API } from "../../shared/routes/api/api.shared";
import { useHttp } from "../http.hook";

export default function useDeleteVarenikApi() {
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

     const deleteVarenik = useCallback(
          async (id: number) => {
               const data: { succes: boolean } = await request({
                    url: DELETE_VARENIK_API,
                    method: "POST",
                    body: { id },
               });

               return data;
          },
          [request]
     );

     return { deleteVarenik, error };
}
