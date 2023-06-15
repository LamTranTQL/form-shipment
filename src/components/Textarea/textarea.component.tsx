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
  return (
    <FlexCols>
      <TextAreaContainer>
        <Content
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
