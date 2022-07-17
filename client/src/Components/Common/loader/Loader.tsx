import loadingIcon from "./assets/images/loading.png";
import styles from "./Loader.module.css";

type LoaderPropsType = {
     classes?: string;
};

export default function Loader({ classes }: LoaderPropsType) {
     return (
          <div className={styles.Loader + " " + classes}>
               <img className={styles.loadingIcon} src={loadingIcon} alt="Загрузка" />
          </div>
     );
}
