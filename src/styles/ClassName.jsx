import { Styles } from "./Styles";
import { TextStyles } from "./TextStyles";

const style = { ...Styles, ...TextStyles };

export const ClassName = classNames => {
    return classNames.reduce((acc, className) => { return { ...acc, ...style[className] } }, {})
};