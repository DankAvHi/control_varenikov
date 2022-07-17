import React, { useState } from "react";
import FlatLabel from "../../Labels/FlatLabel/FlatLabel";
import { InputPropsType } from "../IInput";
import styles from "./FlatInput.module.css";

const FlatInput = ({
     name = "input",
     id = name,
     type = "text",
     value,
     className,
     onChange = undefined,
     label,
     max = "100",
     min = "0",
}: InputPropsType) => {
     const [fakeForm, setFakeForm] = useState({
          [name]: "",
     });

     const defaultOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setFakeForm({ ...fakeForm, [event.target.name]: event.target.value });
     };

     return (
          <div className={`${styles.flatInputContainer} ${className}`}>
               {label ? <FlatLabel text={label} className={styles.label} htmlFor={name} /> : null}

               <input
                    max={max}
                    min={min}
                    type={type}
                    name={name}
                    id={id}
                    value={value ? value : fakeForm[name]}
                    onChange={onChange ? onChange : defaultOnChangeHandler}
                    className={`${styles.FlatInput}`}
               />
          </div>
     );
};

export default FlatInput;
