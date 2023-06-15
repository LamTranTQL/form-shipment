import TypographyProps from "./typography.interface";
import "./typography.style.scss";

function Typography(props: TypographyProps) {
  const { as: Component } = props;

  return <Component className={props.type}>{props.children}</Component>;
}

export default Typography;
