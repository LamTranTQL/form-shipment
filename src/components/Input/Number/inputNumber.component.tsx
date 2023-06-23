import { forwardRef, useRef } from "react";
import { InputNumberProps, InputRef } from "./inputNumber.interface";
import { InputNumberContainer } from "./inputNumber.styled";
import GetContext from "../../Context/Author-Context/getContext";

const InputNumber = forwardRef<InputRef, InputNumberProps>((props, ref) => {
  const { amount, setAmount } = GetContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleKeyUp = (e: any) => {
    let value: any = "";
    let x = e.which || e.keyCode;

    if (x === 189 || x === 69) {
      e.preventDefault();
    } else {
      value = e.target.value;
    }
    setAmount(value);

    if (inputRef.current) {
      inputRef.current.value = value;
    }

    console.log(amount);
  };

  return (
    <InputNumberContainer
      onKeyUp={handleKeyUp}
      type={props.type}
      ref={inputRef}
      min={1}
    />
  );
});

export default InputNumber;
