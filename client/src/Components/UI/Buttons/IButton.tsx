export interface ButtonPropsType extends Partial<HTMLButtonElement> {
     text?: string;
     icon?: string;
     onClick?: React.MouseEventHandler<HTMLButtonElement>;
     size?: "default" | "max" | "min";
     mode?: "link" | "button";
     href?: string;
}
