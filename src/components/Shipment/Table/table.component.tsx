import { forwardRef, useMemo } from "react";
import GetShipmentContext from "../../Context/Shipment-Context/getShipmentContext";

import {
  Description,
  Div,
  OverFlow,
  Row,
  THeader,
  TableContainer,
  Tbody,
  Title,
} from "./table.styled";
// import { TableRef } from "./table.interface";
import CheckBox from "./CheckBox/checkbox.component";

const Table = forwardRef((props: any, ref: any) => {
  const { api, apiSearch, searchRender } = GetShipmentContext();

  return (
    <TableContainer ref={ref}>
      <THeader>
        <Div></Div>
        <Div>
          <Title>Shipment ID</Title>
        </Div>
        <Div>
          <Title>Origin</Title>
        </Div>
        <Div>
          <Title>Destination</Title>
        </Div>
      </THeader>

      <OverFlow>
        <Tbody>
          {searchRender
            ? apiSearch.map((value: any, index: any) => {
                return (
                  <Row key={index}>
                    <Div>
                      <CheckBox index={index} />
                    </Div>
                    <Div>
                      <Description>{value.shipments_id}</Description>
                    </Div>
                    <Div>
                      <Description>{value.origin}</Description>
                    </Div>
                    <Div>
                      <Description>{value.destination}</Description>
                    </Div>
                  </Row>
                );
              })
            : api.map((value: any, index: number) => {
                return (
                  <Row key={index}>
                    <Div>
                      <CheckBox index={index} />
                    </Div>
                    <Div>
                      <Description>{value.shipments_id}</Description>
                    </Div>
                    <Div>
                      <Description>{value.origin}</Description>
                    </Div>
                    <Div>
                      <Description>{value.destination}</Description>
                    </Div>
                  </Row>
                );
              })}
        </Tbody>
      </OverFlow>
    </TableContainer>
  );
});

export default Table;
