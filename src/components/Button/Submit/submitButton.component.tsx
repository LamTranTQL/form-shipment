import { forwardRef } from "react";
import { Ref, SubmitProps } from "./submitButton.interface";
import { Input } from "./submitButton.styled";

const SubmitButton = forwardRef<Ref, SubmitProps>((props, ref) => {
  return (
    <Input
      className="submit-button"
      ref={ref}
      value={props.children}
      type="submit"
    />
  );
});

export default SubmitButton;
