import { LabelPropsType } from "../ILabel";
import styles from "./FlatLabel.module.css";

const FlatLabel = ({ htmlFor, className, text }: LabelPropsType) => {
     return (
          <label htmlFor={htmlFor} className={`${styles.FlatLabel} ${className}`}>
               {text}
          </label>
     );
};

export default FlatLabel;
