import { useCallback, useState } from "react";
import { HttpHookErrorStatusType, HttpHookErrorType, HttpHookLoadingType, HttpHookPropsType } from "./IHttp.hook";

export const useHttp = () => {
     const [loading, setLoading] = useState<HttpHookLoadingType>(false);
     const [error, setError] = useState<HttpHookErrorType>(null);
     const [clientError, setClientError] = useState<HttpHookErrorType>(null);
     const [errorStatus, setErrorStatus] = useState<HttpHookErrorStatusType>(null);

     const request = useCallback(
          async ({
               url,
               method = "GET",
               body,
               headers = new Headers(),
               sendCredentials = false,
               isJSON = true,
               waitingForJson = true,
          }: HttpHookPropsType) => {
               setLoading(true);
               try {
                    if (body && isJSON) {
                         body = JSON.stringify(body);
                         headers.set("Content-Type", "application/json");
                    }
                    const credentials = sendCredentials ? "include" : "same-origin";

                    const response = await fetch(url, {
                         method,
                         body,
                         credentials,
                         headers,
                    });
                    if (!response.ok) {
                         if (response.status) {
                              setErrorStatus(response.status);

                              const contentType = response.headers.get("content-type");
                              const errorData =
                                   contentType && contentType.indexOf("application/json") !== -1
                                        ? await response.json()
                                        : await response.text();

                              const error = errorData.error ? errorData.error : errorData;
                              setClientError(() => {
                                   if (errorData.error) {
                                        return errorData.error;
                                   }
                                   switch (response.status) {
                                        case 504:
                                             return "Сервер не отвечает";
                                        case 401:
                                             return "Неверный запрос";
                                   }
                              });
                              throw new Error(error || "Что-то пошло не так");
                         }
                         throw new Error("Что-то пошло не так");
                    }
                    const data: any = await (waitingForJson ? response.json() : response);

                    setLoading(false);

                    return data;
               } catch (e: any) {
                    setLoading(false);
                    setError(e.message);
                    throw e;
               }
          },
          []
     );

     const clearError = useCallback(() => {
          setError(null);
          setErrorStatus(null);
          setClientError(null);
     }, []);

     return { loading, request, error, clientError, errorStatus, clearError };
};
