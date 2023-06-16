import { forwardRef, useEffect, useRef } from "react";
import { SelectProps, SelectRef } from "./select.interface";
import { Icon, SelectContainer } from "./select.styled";
import iconDown from "./icon-down.svg";
import InputDisabled from "../Input/Disabled/inputDisabled.component";

const Select = forwardRef<SelectRef, SelectProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.placeholder = "select cost type";
    }
  }, []);
  return (
    <SelectContainer ref={ref}>
      <InputDisabled ref={inputRef} />
      <Icon src={iconDown} />
    </SelectContainer>
  );
});

export default Select;
