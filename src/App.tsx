import React from "react";
import "./App.css";
import Typography from "./components/Typography/typography.component";
import SubmitButton from "./components/Button/Submit/submitButton.component";
import ButtonOutline from "./components/Button/Butoton-Outline/buttonOutline.conponent";
import ButtonIcon from "./components/Button/Button-Icon/buttonIcon.component";
import icon1 from "./delete.svg";
import icon2 from "./clear.svg";
import ButtonText from "./components/Button/Button-Text/buttonText.component";
import ButtonTextAndIcon from "./components/Button/Button-Text-Icon/buttonTextAndIcon.component";
import iconAdd from "./icon-add.svg";
import TextArea from "./components/Textarea/textarea.component";

function App() {
  return (
    <div className="App">
      <Typography children="Heading 2" type="heading2" as="h2" />

      <SubmitButton children="Create" />
      <ButtonOutline children="Cancel" />

      <ButtonIcon children={icon1} />
      <ButtonIcon children={icon2} />
      <ButtonText children="Delete All" />
      <ButtonTextAndIcon icon={iconAdd} content="Add shipments" />
      <TextArea children={"asdfadsf"} />
    </div>
  );
}

export default App;
