import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 2rem;
    width: 352px;
    height: 136px;
    background: var(--shape);
    border-radius: 5px;

    &:last-child {
      background: var(--gren);
      p{
        color: var(--shape); 
      }
      strong{
          color: var(--shape);
      }
    }

    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    strong {
      font-size: 2.4rem;
      font-weight: 500;
      color: var(--titulo);
    }
  }
`;
