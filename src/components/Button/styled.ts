import styled, { css } from "styled-components";

interface ButtonStyledProps {
  isDeleted: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  margin-top: 5px;

  font-size: 12px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: deepskyblue;
  outline: none;
  cursor: pointer;
  ${(props) =>
    props.isDeleted &&
    css`
      background: red;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
