import { useEffect, useState } from "react";
import { FilePickerPropsType } from "../IFilePicker";
import cameraImage from "./assets/images/cameraIcon.png";
import styles from "./FlatFilePicker.module.css";

export default function FlatFilePicker({
     name,
     onChange,
     accept,
     text,
     isFileInputClear,
     className,
}: FilePickerPropsType) {
     const [fileName, setFileName] = useState<string | null>(null);
     const [file, setFile] = useState<string | number | readonly string[] | undefined>("");
     const [fileImage, setFileImage] = useState<string | null>(null);
     useEffect(() => {
          setFile((prev) => (isFileInputClear ? "" : prev));
          setFileImage((prev) => (isFileInputClear ? null : prev));
     }, [isFileInputClear]);

     const inputOnChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
          setFile(event.target.value);
          const filePath = event.target.value.split("\\");
          const fileName = filePath[filePath.length - 1];
          setFileName(fileName);

          const reader = new FileReader();
          if (event.target.files && event.target.files[0]) {
               reader.readAsDataURL(event.target.files[0]);

               reader.onloadend = function () {
                    if (typeof reader.result === "string") {
                         setFileImage(reader.result);
                    }
               };
          } else {
               setFileImage(null);
          }

          await onChange(event);
     };
     return (
          <div className={`${styles.FlatFilePicker} ${className}`}>
               <img className={styles.image} src={fileImage ? fileImage : cameraImage} alt="" />
               <div className={styles.contentContainer}>
                    <p className={styles.text}>{text}</p>

                    <div className={styles.inputContainer}>
                         <label className={styles.label} htmlFor={name}>
                              {file && !isFileInputClear ? fileName : "Выберите файл"}
                         </label>
                         <input
                              value={file}
                              onChange={inputOnChangeHandler}
                              name={name}
                              id={name}
                              className={styles.input}
                              type={"file"}
                              accept={accept}
                         />
                    </div>
               </div>
          </div>
     );
}
