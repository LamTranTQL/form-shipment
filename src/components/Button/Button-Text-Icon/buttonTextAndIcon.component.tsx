import { forwardRef } from "react";
import { Ref } from "../Button-Container/button.interface";

import { BtnTextAndIcon, Icon, Span, Text } from "./buttonTextAndIcon.styled";
import BtnTextAndIconProps from "./buttonTextAndIcon.interface";

const ButtonTextAndIcon = forwardRef<Ref, BtnTextAndIconProps>((props, ref) => {
  return (
    <BtnTextAndIcon>
      <Span>
        <Icon src={props.icon} />
        <Text>{props.content}</Text>
      </Span>
    </BtnTextAndIcon>
  );
});

export default ButtonTextAndIcon;
