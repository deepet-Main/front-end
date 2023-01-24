import { Container } from "./styles";
import logo from "../../assets/Initial_Logo.png";
import { SearchBar } from "../SearchBar";

export function Navbar() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <SearchBar />
    </Container>
  );
}
