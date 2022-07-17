import { api } from "../../../../Api/index.api";
import useTopPopup from "../../../../Components/Common/TopPopup/TopPopup.hook";
import FlatButton from "../../../../Components/UI/Buttons/FlatButton/FlatButton";
import { VarenikiType } from "../../../../shared/routes/api/api.shared";
import styles from "./List.module.css";

type ListPropsType = {
     varenik: VarenikiType;
     loadVarenik: (page: number) => Promise<void>;
     page: number;
};

const fields: { [key: string]: any } = {
     name: "Имя",
     metro: "Метро",
     height: "Рост",
     age: "Возраст",
     weight: "Вес",
     clothingSize: "Размер Одежды",
     shoeSize: "Размер Обуви",
     hairColor: "Цвет Волос",
     race: "Раса",
     boobsSize: "Размер Груди",
     oneHourPrice: "Цена за час",
     twoHourPrice: "Цена за 2 часа",
};

const List = ({ varenik, loadVarenik, page }: ListPropsType) => {
     const { deleteVarenik } = api().useDeleteVarenikApi();
     const { showTopPopup } = useTopPopup();

     const deleteButtonOnClickHandler = async (id: number) => {
          const data = await deleteVarenik(id);

          if (data.succes) {
               showTopPopup({ message: { text: "Вареник успешно удалён", type: "info" } });
          }

          loadVarenik(page);
     };

     return (
          <div className={styles.List}>
               {varenik.map((varenik) => {
                    return (
                         <div id={varenik.idvarenik} className={styles.varenik} key={varenik.idvarenik}>
                              <img className={styles.image} src={varenik.photo} alt="" />
                              {Object.keys(varenik).map((key, index) => {
                                   if (key === "photo" || key === "idvarenik") {
                                        return null;
                                   }

                                   const fieldName: string = fields[key];

                                   return (
                                        <div key={index} className={styles.position}>
                                             <span className={styles.name}>{fieldName}:</span>
                                             <span className={styles.property}>{varenik[key]}</span>
                                        </div>
                                   );
                              })}
                              <div className={styles.actions}>
                                   <FlatButton
                                        onClick={() => deleteButtonOnClickHandler(varenik.idvarenik)}
                                        text="Удалить"
                                        size="max"
                                   />
                              </div>
                         </div>
                    );
               })}
          </div>
     );
};

export default List;
