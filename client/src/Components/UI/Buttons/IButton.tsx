export interface ButtonPropsType extends Partial<HTMLButtonElement> {
     text?: string;
     icon?: string;
     onClick?: React.MouseEventHandler<HTMLButtonElement>;
     size?: "default" | "max";
     mode?: "link" | "button";
     href?: string;
}
