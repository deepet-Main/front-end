import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.div`
  img {
    width: 56px;
    height: 56px;
    border-radius: 37px;
    margin-left: 60px;
    margin-right: 25px;
  }
`;

export const SearchButton = styled(AiOutlineSearch)`
  font-size: 32px;
`;
