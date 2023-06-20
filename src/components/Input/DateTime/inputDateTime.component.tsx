import { forwardRef, useEffect, useRef } from "react";
import {
  InputDateTimeProps,
  InputDateTimeRef,
} from "./inputDateTime.interface";
import { InputDateTimeContainer } from "./inputDateTime.styled";
import GetContext from "../../Context/Author-Context/getContext";

const InputDateTime = forwardRef<InputDateTimeRef, InputDateTimeProps>(
  (props, ref) => {
    const inputDateTimeRef = useRef<HTMLInputElement>(null);
    const { dateAndTime, setDateAndTime } = GetContext();
    useEffect(() => {
      const date = new Date();
      let yy = date.getFullYear();
      let mm = date.getMonth() + 1;
      let dd = date.getDate();
      let h = date.getHours();
      let min = date.getMinutes();
      let datetime =
        yy + "-" + (mm < 10 ? "0" + mm : mm) + "-" + dd + "T" + h + ":" + min;

      if (inputDateTimeRef.current) {
        inputDateTimeRef.current.min = datetime;
      }
    }, []);

    const handleChange = () => {
      setDateAndTime(inputDateTimeRef.current?.value);
    };

    return (
      <InputDateTimeContainer
        onChange={handleChange}
        ref={inputDateTimeRef}
        type={props.type}
      />
    );
  }
);

export default InputDateTime;
