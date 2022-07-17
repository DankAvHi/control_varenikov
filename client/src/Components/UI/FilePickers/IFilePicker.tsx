export interface FilePickerPropsType extends Partial<HTMLInputElement> {
     text?: string;
     isFileInputClear: boolean;
     onChange: React.ChangeEventHandler<HTMLInputElement>;
}
