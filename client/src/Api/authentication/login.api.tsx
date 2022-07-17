import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { LoginFormType, LOGIN_API } from "../../shared/routes/api/api.shared";
import { useHttp } from "../http.hook";

export default function useLoginApi() {
     const { request, error, errorStatus, clientError, clearError } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (clientError) {
               showTopPopup({
                    message: { text: errorStatus === 401 ? "Неверные логин или пароль" : clientError, type: "error" },
                    clearError,
               });
          }
     }, [clientError, errorStatus, clearError, showTopPopup]);

     const login = useCallback(
          async (form: LoginFormType) => {
               const data = await request({ url: LOGIN_API, method: "POST", body: { ...form } });

               return data;
          },
          [request]
     );

     return { login, error };
}
