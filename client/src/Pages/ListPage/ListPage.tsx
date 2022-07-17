import { useCallback, useEffect, useState } from "react";
import { api } from "../../Api/index.api";
import Loader from "../../Components/Common/loader/Loader";
import FlatButton from "../../Components/UI/Buttons/FlatButton/FlatButton";
import PageHeading from "../../Components/UI/Headings/PageHeading/PageHeading";
import { VarenikiType } from "../../shared/routes/api/api.shared";
import List from "./Components/List/List";
import styles from "./ListPage.module.css";

const ListPage = () => {
     const { getVarenik } = api().useGetVarenikApi();

     const [page, setPage] = useState<number>(0);
     const [maxPage, setMaxPage] = useState<number>(0);
     const [varenik, setVarenik] = useState<VarenikiType | null>(null);

     const loadVarenik = useCallback(
          async (page: number) => {
               let varenik = await getVarenik({ page: page, count: 9, sendAll: false });

               if (varenik.vareniki.length < 1 && page > 0) {
                    setPage((prev) => prev - 1);
                    varenik = varenik = await getVarenik({ page: page - 1, count: 9, sendAll: false });
               }

               setVarenik(varenik.vareniki);
               setMaxPage(varenik.pages);
          },
          [getVarenik]
     );

     useEffect(() => {
          loadVarenik(0);
     }, [loadVarenik]);

     const prevButtonOnClickHandler = () => {
          setPage((prev) => prev - 1);
          loadVarenik(page - 1);
     };

     const nextButtonOnClickHandler = () => {
          setPage((prev) => prev + 1);
          loadVarenik(page + 1);
     };

     return (
          <div className={styles.ListPage}>
               <PageHeading text={"Список девушек"} />
               <FlatButton className={styles.toForm} mode="link" text="Перейти на страницу формы" href="/form" />

               <div className={styles.pagination}>
                    {page > 0 ? (
                         <FlatButton
                              className={styles.prevButton}
                              onClick={prevButtonOnClickHandler}
                              text="Предыдущая страница"
                         />
                    ) : null}
                    {page + 1 < maxPage ? (
                         <FlatButton onClick={nextButtonOnClickHandler} text="Следующая страница" />
                    ) : null}
               </div>

               <div className={styles.list}>
                    {varenik ? <List loadVarenik={loadVarenik} page={page} varenik={varenik} /> : <Loader />}
               </div>

               <div className={styles.pagination}>
                    {page > 0 ? (
                         <FlatButton
                              className={styles.prevButton}
                              onClick={prevButtonOnClickHandler}
                              text="Предыдущая страница"
                         />
                    ) : null}
                    {page + 1 < maxPage ? (
                         <FlatButton onClick={nextButtonOnClickHandler} text="Следующая страница" />
                    ) : null}
               </div>
          </div>
     );
};

export default ListPage;
