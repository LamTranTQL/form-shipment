import React from "react";
import "./App.css";
import Typography from "./components/Typography/typography.component";
import SubmitButton from "./components/Button/Submit/submitButton.component";

function App() {
  return (
    <div className="App">
      <Typography children="Heading 2" type="heading2" as="h2" />

      <SubmitButton children="Create" />
    </div>
  );
}

export default App;
