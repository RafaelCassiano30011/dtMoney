import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    color: var(--titulo);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--texto);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  .react-modal-button-close {
    outline: none;
    border: none;
    position: absolute;
    top: 21px;
    right: 21px;
    transition: 300ms;
    &:hover {
      filter: brightness(0.9);
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--gren);
    color: #fff;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: 300ms;
    font-weight: 600;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionType = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0px;
`;

interface RadioBoxProps {
  isActive: boolean;
  isColor: "#33CC95" | "#E62E4D";
}

export const RadioBox = styled.button<RadioBoxProps>`
  border: 1px solid #d7d7d7;
  background: ${(props) => (props.isActive ? transparentize("0.9", props.isColor) : "transparent")};
  outline: none;
  display: flex;
  flex: 1;
  height: 64px;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1rem;
  color: var(--titulo);
  border-radius: 0.25rem;
  & + button {
    margin-left: 8px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  /* &:hover {
  } */
`;
