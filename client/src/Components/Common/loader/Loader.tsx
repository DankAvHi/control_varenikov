import loadingIcon from "./assets/images/loading.png";
import styles from "./Loader.module.css";

type LoaderPropsType = {
     className?: string;
     type?: "local" | "global" | "block";
};

export default function Loader({ className, type = "global" }: LoaderPropsType) {
     let typeClasses = "";

     switch (type) {
          case "block":
               typeClasses = typeClasses + styles.Loader_block;
               break;
          case "local":
               typeClasses = typeClasses + styles.Loader_local;
               break;
     }
     return (
          <div className={`${styles.Loader} ${typeClasses} ${className}`}>
               <img className={styles.loadingIcon} src={loadingIcon} alt="Загрузка" />
          </div>
     );
}
