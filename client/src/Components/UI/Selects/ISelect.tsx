export interface ReactSelectPropsType {
     label?: string;
     name?: string;
     placeholder?: string;
     id?: string;
     options?: { label: string; value: string }[];
     classes?: string;
     onChange?: any;
     defaultValue?: { label: string; value: string };
     value?: { label: string; value: string };
     required?: boolean;
     multi?: boolean;
     hidden?: boolean;
     isSearchable?: boolean;
}
