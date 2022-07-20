import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../Api/index.api";
import Loader from "../../Components/Common/loader/Loader";
import FlatButton from "../../Components/UI/Buttons/FlatButton/FlatButton";
import PageHeading from "../../Components/UI/Headings/PageHeading/PageHeading";
import { VarenikiType } from "../../shared/routes/api/api.shared";
import List from "./Components/List/List";
import styles from "./ListPage.module.css";

const ListPage = () => {
     const { getVarenik, loading } = api().useGetVarenikApi();
     const params = useParams();

     const pageId = Number(params.id) - 1 || 0;

     const [page, setPage] = useState<number>(pageId);
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
          setPage(pageId);
          loadVarenik(page);
     }, [loadVarenik, page, pageId]);

     return (
          <div className={styles.ListPage}>
               <PageHeading text={"Список девушек"} />
               <FlatButton className={styles.toForm} mode="link" text="Перейти на страницу формы" href="/form" />

               <div className={styles.pagination}>
                    <FlatButton
                         href={`/list/${page}`}
                         mode="link"
                         className={styles.prevButton}
                         disabled={!(page > 0)}
                         text="Предыдущая страница"
                         size="min"
                    />

                    <FlatButton
                         disabled={!(page + 1 < maxPage)}
                         href={`/list/${page + 2}`}
                         mode="link"
                         text="Следующая страница"
                         size="min"
                    />
               </div>

               {!loading && varenik && varenik.length > 0 ? (
                    <>
                         <List loadVarenik={loadVarenik} page={page} varenik={varenik} />

                         <div className={styles.pagination}>
                              <FlatButton
                                   href={`/list/${page}`}
                                   mode="link"
                                   className={styles.prevButton}
                                   disabled={!(page > 0)}
                                   text="Предыдущая страница"
                                   size="min"
                              />

                              <FlatButton
                                   disabled={!(page + 1 < maxPage)}
                                   href={`/list/${page + 2}`}
                                   mode="link"
                                   text="Следующая страница"
                                   size="min"
                              />
                         </div>
                    </>
               ) : (
                    <Loader type="local" />
               )}
          </div>
     );
};

export default ListPage;
