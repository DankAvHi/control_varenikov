import { HeadingPropsType } from "../IHeading";
import styles from "./PageHeading.module.css";

const PageHeading = ({ text }: HeadingPropsType) => {
     return <h1 className={styles.PageHeading}>{text}</h1>;
};

export default PageHeading;
