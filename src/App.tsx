import React from "react";
import "./App.css";

import { AuthorContextProvider } from "./components/Context/Author-Context/authorContext.provider";
import Shipment from "./components/Shipment/shipment.component";
import { ShipmentContextProvider } from "./components/Context/Shipment-Context/shipmentContext.provider";

function App() {
  return (
    <AuthorContextProvider>
      <div className="App">
        <ShipmentContextProvider>
          <Shipment />
        </ShipmentContextProvider>
      </div>
    </AuthorContextProvider>
  );
}

export default App;
