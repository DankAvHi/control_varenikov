import React, { useState } from "react";
import RandomValueGenerator from "../../../RandomValueGenerator/RandomValueGenerator";
import FlatLabel from "../../Labels/FlatLabel/FlatLabel";
import { InputRandomPropsType } from "../IInput";
import styles from "./FlatInputRandom.module.css";

const FlatInputRandom = ({
     name = "input",
     id = name,
     type = "text",
     value,
     className,
     onChange = undefined,
     label,
     ranges = [{ min: "0", max: "100" }],
     max,
     min,
     form,
     setForm,
     pretty = false,
}: InputRandomPropsType) => {
     const [fakeForm, setFakeForm] = useState({
          [name]: "",
     });
     const defaultOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setFakeForm({ ...fakeForm, [event.target.name]: event.target.value });
     };

     const inputRandomOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
               onChange(event);
          } else {
               defaultOnChangeHandler(event);
          }
     };

     return (
          <div className={`${styles.flatInputRandomContainer} ${className}`}>
               {label ? <FlatLabel text={label} className={styles.label} htmlFor={name} /> : null}
               <div className={styles.inputContainer}>
                    <input
                         max={max}
                         min={min}
                         type={type}
                         name={name}
                         id={id}
                         value={value ? value : fakeForm[name]}
                         onChange={inputRandomOnChangeHandler}
                         className={`${styles.FlatInputRandom}`}
                    />
                    {ranges.map((range) => {
                         return (
                              <RandomValueGenerator
                                   key={Math.random()}
                                   rangeStart={Number(range.min)}
                                   rangeEnd={Number(range.max)}
                                   className={styles.randomButton}
                                   form={form}
                                   setForm={setForm}
                                   name={name}
                                   pretty={pretty}
                              />
                         );
                    })}
               </div>
          </div>
     );
};

export default FlatInputRandom;
