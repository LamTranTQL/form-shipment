import { forwardRef, useEffect, useRef } from "react";
import { InputProps, InputRef } from "./input.interface";
import { InputContainer } from "./input.style";
import GetContext from "../../Context/Author-Context/getContext";

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { setAmount, setDateAndTime } = GetContext();

  useEffect(() => {
    if (props.type === "number") {
      if (inputRef.current) {
        inputRef.current.type = "number";
        inputRef.current.min = "1";
      }
    } else if (props.type === "date time") {
      let dd = new Date().getDate();
      let mm = new Date().getMonth();
      let yy = new Date().getFullYear();
      if (mm === 11 && dd === 31) {
        yy += 1;
        mm = 1;
        dd = 1;
      } else {
        switch (mm) {
          case 0:
          case 2:
          case 4:
          case 6:
          case 7:
          case 9:
          case 11:
            if (dd < 31) {
              dd += 1;
            } else {
              dd = 1;
              mm += 1;
            }
            break;
          case 1:
            if (dd < 28) {
              dd += 1;
            } else {
              dd = 1;
              mm += 1;
            }
            break;
          case 3:
          case 5:
          case 8:
          case 10:
            if (dd < 30) {
              dd += 1;
            } else {
              dd = 1;
              mm += 1;
            }
            break;
          default:
            break;
        }
      }
      let dateTime =
        yy + "-" + (mm < 10 ? "0" + (mm + 1) : mm + 1) + "-" + dd + "T00:00";

      if (inputRef.current) {
        inputRef.current.type = "datetime-local";
        inputRef.current.min = dateTime;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyUp = (e: any) => {
    console.log(e.key);
    if (props.type === "number") {
      let value = e.target.value;
      if (e.keyCode === 189 || e.keyCode === 69) {
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } else {
        // inputRef.current.value = value;
      }
      // setAmount(inputRef.current.value);
    } else {
      if (inputRef.current) {
        setDateAndTime(inputRef.current.value);
      }
    }
  };

  return <InputContainer onChange={handleKeyUp} ref={inputRef} />;
});

export default Input;
