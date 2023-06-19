import React from "react";
import "./App.css";

import { AuthorContextProvider } from "./components/Context/Author-Context/authorContext.provider";
import Typography from "./components/Typography/typography.component";

function App() {
  return (
    <AuthorContextProvider>
      <div className="App">
        <div className="container">
          <header className="header">
            <Typography children="Create new cost" type="heading2" as={"h2"} />
          </header>

          <main className="main">
            <div>
              <Typography children="Cost details" type="title" as={"div"} />
              <Typography
                children="Fill in the details of the cost with relevant shipment info and documents as proof of cost.
"
                type="description"
                as={"div"}
              />
            </div>

            <div></div>
          </main>
        </div>
      </div>
    </AuthorContextProvider>
  );
}

export default App;
