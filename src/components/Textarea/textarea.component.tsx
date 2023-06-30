import {
  Content,
  Counter,
  FlexCols,
  TextAreaContainer,
} from "./textarea.styled";
import { forwardRef, useRef } from "react";
import { Ref, TextAreaProps } from "./textarea.interface";

const TextArea = forwardRef<Ref, TextAreaProps>((props, ref) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const counter = useRef<number>(0);
  // const [textValue, setTextValue] = useState<string>("");

  const handleKeyUp = (e: any) => {
    let value = e.target.value;
    counter.current = value.length;
    if (textAreaRef.current) {
      textAreaRef.current.value = value;
    }
    if (counterRef.current) {
      counterRef.current.innerText = `${counter.current}/2000`;
    }
  };

  // const handleChange = (e: any) => {
  //   let value = e.target.value;
  //   setTextValue(value);
  // };

  return (
    <FlexCols>
      <TextAreaContainer>
        <Content
          // value={textValue}
          // onChange={handleChange}
          ref={textAreaRef}
          onKeyUp={handleKeyUp}
          maxLength={2000}
          rows={3}
        ></Content>
      </TextAreaContainer>
      <Counter ref={counterRef}>0/2000</Counter>
    </FlexCols>
  );
});

export default TextArea;
