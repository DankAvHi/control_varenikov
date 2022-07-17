import Select from "react-select";
import FlatLabel from "../../Labels/FlatLabel/FlatLabel";
import { ReactSelectPropsType } from "../ISelect";

import styles from "./FlatSelect.module.css";
import FlatSelectStyles from "./FlatSelect.styles";

export default function FlatSelect({
     label = "",
     name = "",
     placeholder,
     id = name,
     options = [{ label: "label", value: "value" }],
     classes = "",
     onChange,
     defaultValue,
     value,
     required = false,
     multi = false,
     hidden = false,
     isSearchable = false,
}: ReactSelectPropsType) {
     const containerClasses = hidden ? styles.hidden : null;

     return (
          <div className={styles.container + " " + classes + " " + containerClasses}>
               <FlatLabel text={label} />
               <Select
                    isMulti={multi}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    placeholder={placeholder ? placeholder : "Выберите"}
                    isSearchable={isSearchable}
                    styles={FlatSelectStyles}
                    name={name}
                    id={id ? id : name}
                    options={options}
               />
          </div>
     );
}
