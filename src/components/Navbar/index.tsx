import { Container } from "./styles";
import logo from "../../assets/OficialLogo.png";
import { SidebarContext } from "../../contexts/sidebarContext";
import React from "react";
import { GoThreeBars } from "react-icons/go";
import { SearchButton } from "./styles";

export function Navbar() {
  const { toggle } = React.useContext(SidebarContext);
  return (
    <Container className="w-11/12 2xl: max-w-7xl h-16 flex justify-between items-center mt-3 rounded-lg fixed top-0">
      <div>
        <button
          className="absolute z-30 flex items-center justify-center cursor-pointer left-3 top-3 w-10 h-10 rounded-full hover:bg-neutral-400"
          onClick={() => toggle()}
        >
          <GoThreeBars className="h-8 w-8 text-black " />
        </button>
      </div>
      <div className="flex flex-row items-center justify-center">
        <img className="h8 w8" src={logo} alt="Logo" />
      </div>
      <SearchButton></SearchButton>
    </Container>
  );
}
