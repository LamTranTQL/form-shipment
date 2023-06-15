import React from "react";
import "./App.css";
import Typography from "./components/Typography/typography.component";
import SubmitButton from "./components/Button/Submit/submitButton.component";
import ButtonOutline from "./components/Button/Butoton-Outline/buttonOutline.conponent";
import ButtonIcon from "./components/Button/Button-Icon/buttonIcon.component";
import icon1 from "./delete.svg";
import icon2 from "./clear.svg";

function App() {
  return (
    <div className="App">
      <Typography children="Heading 2" type="heading2" as="h2" />

      <SubmitButton children="Create" />
      <ButtonOutline children="Cancel" />

      <ButtonIcon children={icon1} />
      <ButtonIcon children={icon2} />
    </div>
  );
}

export default App;
