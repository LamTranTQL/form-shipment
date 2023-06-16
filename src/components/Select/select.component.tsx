import { forwardRef, useEffect, useRef, useState } from "react";
import { SelectProps, SelectRef } from "./select.interface";
import {
  Icon,
  SelectContainer,
  SelectItem,
  SelectOptionsContainer,
} from "./select.styled";
import iconDown from "./icon-down.svg";
import InputDisabled from "../Input/Disabled/inputDisabled.component";
import GetContext from "../Context/Author-Context/getContext";
import { createPortal } from "react-dom";

const portalRoot = document.getElementById("portal") as HTMLElement;

const Select = forwardRef<SelectRef, SelectProps>((props, ref) => {
  // useRef
  const inputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const valueSelected = useRef<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let optionRef: HTMLDivElement;
  // Get value from context
  const { select, setCostType, setIncurred, setCurrency } = GetContext();
  // useState
  const [data, setData] = useState<string[]>([]);
  const [isOptions, setIsOptions] = useState<boolean>(false);
  const [coords, setCoords] = useState<any>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (props.type === "cost type") {
      setData(select.costType);
      if (inputRef.current) {
        inputRef.current.placeholder = "Select cost type";
      }
    } else if (props.type === "incurred") {
      setData(select.incurred);
      if (inputRef.current) {
        inputRef.current.placeholder = "Select incurred";
      }
    } else if (props.type === "currency") {
      setData(select.currency);
      if (inputRef.current) {
        inputRef.current.value = "USA";
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    document.addEventListener("click", handleOutSideClick);

    if (selectRef.current) {
      const clientReact = selectRef.current.getBoundingClientRect();
      setCoords({
        x: clientReact.left,
        y: clientReact.top + window?.scrollY,
        width: clientReact.width,
        height: clientReact.height,
      });
      setIsOptions(!isOptions);
    }
  };

  const handleOutSideClick = (event: any) => {
    if (selectRef.current !== null) {
      if (selectRef && !selectRef.current.contains(event.target)) {
        setIsOptions(false);
      }
    }
  };

  const handleOptionsClick = (value: any, index: number) => {
    valueSelected.current = value;
    if (inputRef.current) {
      inputRef.current.value = value;
    }
    if (props.type === "Cost type") {
      setCostType(value);
    } else if (props.type === "incurred") {
      setIncurred(value);
    } else if (props.type === "currency") {
      setCurrency(value);
    }
  };
  return (
    <>
      <SelectContainer onClick={handleClick} ref={selectRef}>
        <InputDisabled ref={inputRef} />
        <Icon src={iconDown} />
      </SelectContainer>

      {isOptions &&
        createPortal(
          <SelectOptionsContainer
            style={{
              left: coords.x,
              top: coords.y + coords.height,
              width: coords.width,
            }}
          >
            {data.map((value: any, index: number) => {
              return (
                <SelectItem
                  key={index}
                  onClick={() => {
                    handleOptionsClick(value, index);
                  }}
                  ref={(element: HTMLDivElement) => {
                    if (element) {
                      if (valueSelected.current === value) {
                        element.style.backgroundColor = "#C5E1FF";
                      }
                      return (optionRef = element);
                    }
                  }}
                >
                  {value}
                </SelectItem>
              );
            })}
          </SelectOptionsContainer>,
          portalRoot
        )}
    </>
  );
});

export default Select;
