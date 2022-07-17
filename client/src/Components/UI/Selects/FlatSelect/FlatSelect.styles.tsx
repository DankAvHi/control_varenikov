import { StylesConfig } from "react-select";
const FlatSelectStyles: StylesConfig = {
     control: (provided, state) => ({
          ...provided,
          border: "1px solid #e2005f",
          "&:hover": {
               border: "1px solid #e2005f",
          },
          backgroundColor: "transparent",
          cursor: "pointer",
          boxShadow: "none",
     }),
     placeholder: (provided, state) => ({
          ...provided,
          color: "white",
     }),
     input: (provided, state) => ({
          ...provided,
          color: "white",
     }),
     singleValue: (provided, state) => ({
          ...provided,
          color: "white",
     }),
     indicatorSeparator: () => ({
          display: "none",
     }),
     option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? "#e2005f" : "#000320",
          padding: 5,
          cursor: "pointer",
     }),
     menuList: (provided, state) => ({
          ...provided,

          border: "1px solid #e2005f",
          borderRadius: "5px",
          padding: 0,
          backgroundColor: "#000320",
     }),
     dropdownIndicator: (provided, state) => ({ ...provided, color: "#e2005f" }),
};

export default FlatSelectStyles;
