import { forwardRef, useEffect, useRef, useState } from "react";
import { CheckBoxProps, ChekcBoxRef } from "./checkbox.interface";
import { Active, FlexCenter, Plate } from "./checkbox.styled";
import iconActive from "./icon-active.svg";
import GetShipmentContext from "../../../Context/Shipment-Context/getShipmentContext";

const CheckBox = forwardRef<ChekcBoxRef, CheckBoxProps>((props, ref) => {
  const { indexSelected, setIndexSelected } = GetShipmentContext();
  const plateRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (indexSelected.includes(props.index)) {
      if (plateRef.current) {
        plateRef.current.style.backgroundColor = "#093359";
        setIsActive(true);
      }
    } else {
      if (plateRef.current) {
        plateRef.current.style.backgroundColor = "#FFFFFF";
        setIsActive(false);
      }
    }
  });

  const handleClick = () => {
    if (isActive) {
      let index = [...indexSelected];
      let i = index.indexOf(props.index);

      index.splice(i, 1);
      setIndexSelected(index);

      if (plateRef.current) {
        plateRef.current.style.backgroundColor = "#FFFFFF";
      }
      setIsActive(false);
    } else {
      let index = [...indexSelected];

      index.push(props.index);
      setIndexSelected(index);

      if (plateRef.current) {
        plateRef.current.style.backgroundColor = "#093359";
      }
      setIsActive(true);
    }
  };

  return (
    <FlexCenter onClick={handleClick}>
      <Plate ref={plateRef}>
        {isActive && <Active src={iconActive}></Active>}
      </Plate>
    </FlexCenter>
  );
});

export default CheckBox;
