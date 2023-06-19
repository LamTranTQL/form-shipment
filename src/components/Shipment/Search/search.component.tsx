import GetShipmentContext from "../../Context/Shipment-Context/getShipmentContext";
import iconSearch from "./icon-search.svg";
import { Icon, SearchContainer, SearchInput } from "./search.styled";

function Search() {
  const { api, setApiSearch, setSearchRender } = GetShipmentContext();

  const handleChange = (e: any) => {
    let apiSearch: any[] = [];
    let keySearch = e.target.value;
    let flat = false;
    api.forEach((value: any) => {
      if (keySearch === value.shipments_id.substr(0, keySearch.length)) {
        flat = true;
        apiSearch.push(value);
      }
    });
    if (flat) {
      setSearchRender(true);
      setApiSearch(apiSearch);
    } else {
      setSearchRender(false);
    }
  };

  return (
    <>
      <SearchContainer>
        <Icon src={iconSearch} />
        <SearchInput
          onChange={handleChange}
          placeholder="Search by order ID, shipment ID"
        />
      </SearchContainer>
    </>
  );
}

export default Search;
