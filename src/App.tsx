import React from "react";
import "./App.css";
import Typography from "./components/Typography/typography.component";
import SubmitButton from "./components/Button/Submit/submitButton.component";
import Button from "./components/Button/Default/button.component";

function App() {
  return (
    <div className="App">
      <Typography children="Heading 2" type="heading2" as="h2" />

      <SubmitButton children="Create" />

      <Button children="Add" />
    </div>
  );
}

export default App;
