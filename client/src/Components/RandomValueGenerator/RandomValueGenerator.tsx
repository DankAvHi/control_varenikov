import FlatButton from "../UI/Buttons/FlatButton/FlatButton";
import randomImage from "./Assets/Images/randomIcon.png";
import styles from "./RandomValueGenerator.module.css";

function rand(min: number, max: number, step: number) {
     let delta, range, rand;
     if (arguments.length < 2) {
          max = min;
          min = 0;
     }
     if (!step) {
          step = 1;
     }
     max = max + step;
     delta = max - min;
     range = delta / step;
     rand = Math.random();
     rand *= range;
     rand = Math.floor(rand);
     rand *= step;
     rand += min;
     return rand;
}

type RandomValueGeneratorPropsType = {
     returnType?: "string" | "number";
     className: string;
     rangeStart: number;
     rangeEnd: number;
     form: any;
     pretty?: boolean;
     setForm: React.Dispatch<React.SetStateAction<any>>;
     name: string;
};

const RandomValueGenerator = ({
     returnType = "string",
     className,
     setForm,
     rangeStart,
     rangeEnd,
     form,
     pretty = false,
     name,
}: RandomValueGeneratorPropsType) => {
     const buttonOnClickHandler = () => {
          let random = rand(rangeStart, rangeEnd, 1);

          if (pretty) {
               random = rand(rangeStart, rangeEnd, 500);
          }
          setForm({ ...form, [name]: String(random) });
     };

     return (
          <FlatButton
               icon={randomImage}
               onClick={buttonOnClickHandler}
               className={`${styles.RandomValueGenerator} ${className}`}
          />
     );
};

export default RandomValueGenerator;
