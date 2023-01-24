import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
export const Container = styled.div`
  width: 40%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    height: 40px;
    width: 70%;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    background-color: transparent;
    color: #fff;
    border-color: #222;
    padding-left: 20px;
    outline: 1px solid #717171;
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }
  input:focus {
    outline: 1px solid gray;
  }
  button {
    height: 40px;
    width: 64px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    background-color: rgb(255 255 255 / 8%);
    outline: 1px solid #717171;
    border: none;
    color: #fff;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchButton = styled(AiOutlineSearch)`
  font-size: 20px;
`;
