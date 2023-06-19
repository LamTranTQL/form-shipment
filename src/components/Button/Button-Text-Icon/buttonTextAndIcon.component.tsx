import { forwardRef } from "react";
import { Ref } from "../Button-Container/button.interface";

import { BtnTextAndIcon, Icon, Span, Text } from "./buttonTextAndIcon.styled";
import BtnTextAndIconProps from "./buttonTextAndIcon.interface";
import GetContext from "../../Context/Author-Context/getContext";

const ButtonTextAndIcon = forwardRef<Ref, BtnTextAndIconProps>((props, ref) => {
  const { setIsShipment } = GetContext();
  const handleClick = (e: any) => {
    e.preventDefault();
    setIsShipment(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <BtnTextAndIcon onClick={handleClick}>
      <Span>
        <Icon src={props.icon} />
        <Text>{props.content}</Text>
      </Span>
    </BtnTextAndIcon>
  );
});

export default ButtonTextAndIcon;
