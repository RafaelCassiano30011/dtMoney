import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --background:#F0F2F5;
    --red:#E62E4D;
    --blue:#5429CC;
    --blue-ligth:#6933FF;
    --gren:#33CC95;
    --shape:#FFFFFF;
    --titulo:#363F5F;
    --texto:#969CB3;
}
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    width: 100vw;
    height: 100vh;
    background-color: var(--background);
    -webkit-font-smoothing:antialiased;
}

html{
    @media (max-width:1080px){
        font-size: 93.75%;
    }

    @media (max-width:720px){
        font-size: 87.5%;
    }
}

button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.7;
    cursor: not-allowed;
}
.react-modal-overlay{
    background-color: rgba(0,0,0,0.5);
   position: fixed;
   top: 0px;
   left: 0px;
   bottom: 0px;
   right: 0px;
   display: flex;
   justify-content: center;
   align-items: center;
}
.react-modal-content{
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding:3rem;
  position: relative;
  border-radius: 0.25rem;

}

`;


