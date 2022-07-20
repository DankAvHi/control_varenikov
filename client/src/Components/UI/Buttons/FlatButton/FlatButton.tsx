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
     disabled,
}: ButtonPropsType) => {
     let sizeStyles = "";

     switch (size) {
          case "max":
               sizeStyles = sizeStyles + styles.max;
               break;
          case "min":
               sizeStyles = sizeStyles + styles.min;
               break;

          default:
     }

     const disabledClasses = disabled ? styles.disabled : null;

     if (mode === "link") {
          if (disabled) {
               return (
                    <button
                         disabled={true}
                         className={`${styles.FlatButton}  ${sizeStyles} ${disabledClasses} ${className}`}
                    >
                         <span className={styles.text}>{text}</span>
                         {icon ? <img className={styles.icon} src={icon} alt="" /> : null}
                    </button>
               );
          }

          return (
               <Link className={`${styles.FlatButton} ${sizeStyles} ${disabledClasses}  ${className}`} to={href}>
                    <span className={styles.text}>{text}</span>
                    {icon ? <img className={styles.icon} src={icon} alt="" /> : null}
               </Link>
          );
     }

     return (
          <button
               disabled={disabled}
               className={`${styles.FlatButton} ${sizeStyles} ${disabledClasses}  ${className}`}
               onClick={onClick ? onClick : () => {}}
          >
               <span className={styles.text}>{text}</span>
               {icon ? <img className={styles.icon} src={icon} alt="" /> : null}
          </button>
     );
};

export default FlatButton;
