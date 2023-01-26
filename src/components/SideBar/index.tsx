import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Container } from "./style";
import logo from "../../assets/Initial_Logo2.png";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      {!isOpen ? (
        <button
          className="fixed z-30 flex items-center justify-center cursor-pointer left-3 top-3 w-10 h-10 rounded-full hover:bg-neutral-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GoThreeBars className="h-5 w-5 text-white " />
        </button>
      ) : (
        <button
          className="fixed z-30 flex items-center justify-center cursor-pointer left-3 top-3 w-10 h-10 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GoThreeBars className="h-5 w-5 text-black " />
        </button>
      )}
      <div
        className={`top-0 left-0 fixed bg-white w-60 h-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300`}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-14 h-14 rounded-full ml-15 mt-1"
        />
      </div>
    </Container>
  );
}
