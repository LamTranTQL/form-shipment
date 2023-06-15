import { forwardRef } from "react";
import { Ref } from "../Button-Container/button.interface";
import { BtnIconProps } from "./buttonIcon.interface";

import { BtnIcon, Icon } from "./buttonIcon.styled";
import { Span } from "../Button-Container/button.styled";

const ButtonIcon = forwardRef<Ref, BtnIconProps>((props, ref) => {
  return (
    <BtnIcon>
      <Span>
        <Icon src={props.children} />
      </Span>
    </BtnIcon>
  );
});

export default ButtonIcon;
