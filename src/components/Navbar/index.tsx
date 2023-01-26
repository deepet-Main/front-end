import { Container } from "./styles";
import logo from "../../assets/Initial_Logo2.png";
import { SearchBar } from "../SearchBar";
import { Sidebar } from "../SideBar";

export function Navbar() {
  return (
    <Container>
      <div>
        <Sidebar />
        <img src={logo} alt="Logo" />
      </div>
      <SearchBar />
      <div>
        <p>Cart</p>
      </div>
    </Container>
  );
}
