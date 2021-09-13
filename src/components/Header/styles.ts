import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  height: 212px;
  width: 100%;
  .container-center {
    padding: 2rem 0px;
    display: flex;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;

    button {
      color: var(--shape);
      width: 195px;
      height: 48px;
      left: 1085px;
      top: 32px;
      outline: none;
      border: none;
      background: var(--blue-ligth);
      border-radius: 5px;
      transition: 300ms;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
