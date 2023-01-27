import { Container } from "./styles";
import logo from "../../assets/OficialLogo.png";
import { SearchBar } from "../SearchBar";
import { Sidebar } from "../SideBar";

export function Navbar() {
  return (
    <Container className="max-w-7xl h-16 flex justify-around mt-3 rounded-lg">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <SearchBar />
      <div>
        <p>Cart</p>
      </div>
    </Container>
  );
}
