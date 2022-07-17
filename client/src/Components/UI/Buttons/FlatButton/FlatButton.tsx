import { Link } from "react-router-dom";
import { ButtonPropsType } from "../IButton";
import styles from "./FlatButton.module.css";

const FlatButton = ({
     className,
     onClick,
     text,
     icon,
     size = "default",
     mode = "button",
     href = "/",
}: ButtonPropsType) => {
     let sizeStyles = "";

     switch (size) {
          case "max":
               sizeStyles = sizeStyles + styles.max;
               break;
          default:
     }
     if (mode === "link") {
          return (
               <Link className={`${styles.FlatButton}  ${className} ${sizeStyles}`} to={href}>
                    <span className={styles.text}>{text}</span>
                    {icon ? <img className={styles.icon} src={icon} alt="" /> : null}
               </Link>
          );
     }

     return (
          <button className={`${styles.FlatButton}  ${className} ${sizeStyles}`} onClick={onClick ? onClick : () => {}}>
               <span className={styles.text}>{text}</span>
               {icon ? <img className={styles.icon} src={icon} alt="" /> : null}
          </button>
     );
};

export default FlatButton;
