import { Container } from "./styles";
import logo from "../../assets/OficialLogo.png";
import { SearchBar } from "../SearchBar";
import { SidebarContext } from "../../contexts/sidebarContext";
import React from "react";
import { GoThreeBars } from "react-icons/go";

export function Navbar() {
  const { toggle } = React.useContext(SidebarContext);
  return (
    <Container className="w-11/12 2xl: max-w-7xl h-16 flex justify-between items-center mt-3 rounded-lg fixed top-0 bg-white mx-5 shadow-lg mx-3">
      <div>
        <button
          className="absolute z-30 flex items-center justify-center cursor-pointer left-3 top-3 w-10 h-10 rounded-full hover:bg-neutral-400"
          onClick={() => toggle()}
        >
          <GoThreeBars className="h-5 w-5 text-black " />
        </button>
        <img src={logo} alt="Logo" />
      </div>

      <SearchBar />
      <div>
        <p>Cart</p>
      </div>
    </Container>
  );
}
