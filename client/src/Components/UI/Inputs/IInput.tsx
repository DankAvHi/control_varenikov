import React, { HTMLInputTypeAttribute } from "react";

export interface InputPropsType extends Partial<HTMLInputElement> {
     label?: string;
     type?: HTMLInputTypeAttribute;
     onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface InputRandomPropsType extends InputPropsType {
     ranges?: { min: string; max: string }[];
     pretty?: boolean;
     form: any;
     setForm: React.Dispatch<React.SetStateAction<any>>;
     name: string;
}
