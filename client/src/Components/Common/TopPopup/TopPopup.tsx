import errorImage from "./assets/images/errorIcon.png";
import infoImage from "./assets/images/infoIcon.png";
import succesImage from "./assets/images/succesIcon.png";
import warnigImage from "./assets/images/warningIcon.png";
import { TopPopupPropsType } from "./ITopPopup";
import styles from "./TopPopup.module.css";

export default function TopPopup({ text, type = "warning", duration = 1500 }: TopPopupPropsType) {
     const popupTheme = {
          classes: "",
          imageSRC: "",
     };

     switch (type) {
          case "warning":
               popupTheme.classes = styles.TopPopup_warning;
               popupTheme.imageSRC = warnigImage;
               break;
          case "error":
               popupTheme.classes = styles.TopPopup_error;
               popupTheme.imageSRC = errorImage;
               break;
          case "succes":
               popupTheme.classes = styles.TopPopup_succes;
               popupTheme.imageSRC = succesImage;
               break;
          case "info":
               popupTheme.classes = styles.TopPopup_info;
               popupTheme.imageSRC = infoImage;
               break;
          default:
               popupTheme.classes = styles.TopPopup_warning;
               popupTheme.imageSRC = warnigImage;
               break;
     }

     return (
          <div
               style={{ animationDuration: String(duration) + "ms" }}
               className={styles.TopPopup + " " + popupTheme.classes}
          >
               <img className={styles.image} src={popupTheme.imageSRC} alt="" />
               <span className={styles.text}>{text}</span>
          </div>
     );
}
