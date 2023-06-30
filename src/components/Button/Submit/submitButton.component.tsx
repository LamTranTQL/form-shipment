import { forwardRef, useEffect, useRef } from "react";
import { Ref, SubmitProps } from "./submitButton.interface";
import { Input } from "./submitButton.styled";
import GetContext from "../../Context/Author-Context/getContext";

const SubmitButton = forwardRef<Ref, SubmitProps>((props, ref) => {
  const submitRef = useRef<HTMLInputElement>(null);
  const { submitForm } = GetContext();

  useEffect(() => {
    if (submitForm) {
      if (submitRef.current) {
        submitRef.current.disabled = false;
        submitRef.current.style.removeProperty("opacity");
      }
    } else {
      if (submitRef.current) {
        submitRef.current.disabled = true;
        submitRef.current.style.opacity = "0.3";
      }
    }
  });

  return (
    <Input
      className="submit-button"
      ref={submitRef}
      value={props.children}
      type="submit"
    />
  );
});

export default SubmitButton;
