import { Navigate, Route, Routes } from "react-router-dom";
import FormPage from "../Pages/FormPage/FormPage";
import ListPage from "../Pages/ListPage/ListPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export const useRoutes = (isAuthenticated: boolean) => {
     if (isAuthenticated) {
          return (
               <Routes>
                    <Route path="/list/:id" element={<ListPage />} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="*" element={<Navigate replace to={"/list/1"} />} />
               </Routes>
          );
     }

     return (
          <Routes>
               <Route path="/" element={<LoginPage />} />
               <Route path="*" element={<Navigate replace to={"/"} />} />
          </Routes>
     );
};
