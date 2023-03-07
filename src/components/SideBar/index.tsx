import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Container, ContentContainer, Content } from "./style";
import logo from "../../assets/OficialLogo.png";
import { VscHome } from "react-icons/vsc";
import { SidebarContext } from "../../contexts/sidebarContext";

export function Sidebar() {
  const { isOpen, toggle } = React.useContext(SidebarContext);
  return (
    <Container className="flex flex-col w-5/6 ">
      <div
        className={`top-0 left-0 fixed bg-white w-60 h-full z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300 flex flex-col`}
      >
        <button
          className="absolute z-30 flex items-center justify-center cursor-pointer left-3 top-3 w-10 h-10 rounded-full"
          onClick={() => toggle()}
        >
          <GoThreeBars className="h-5 w-5 text-black " />
        </button>
        <div className="flex flex-row justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 rounded-full ml-15 mt-1"
          />
          <h3 className="text-3xl">Deepet</h3>
        </div>
        <ContentContainer>
          <Content className="hover:bg-neutral-600">
            <VscHome className="text-2xl text-black" />
            <h1></h1>
          </Content>
          <Content className="hover:bg-neutral-600">
            <VscHome className="text-2xl text-black" />
            <h1></h1>
          </Content>
          <Content className="hover:bg-neutral-600">
            <VscHome className="text-2xl text-black" />
            <h1></h1>
          </Content>
        </ContentContainer>
      </div>
    </Container>
  );
}
