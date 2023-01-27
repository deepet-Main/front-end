import styled from "styled-components";

export const Container = styled.div``;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border-radius: 10px;
  &:hover {
    background-color: bg-black;
  }
  width: 205px;
  height: 40px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;
