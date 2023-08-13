import { styled, createGlobalStyle } from "styled-components";


export const Styled = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100%;
  height: 100%;
  font-family: 'Poppins', sans-serif; 

  
}

:root{
  --color-base: #fb7171;
  --color-bg: #4caf50; 
  --color-text: #454545;
  --color-card: #0000001a;
}



p{
  color: var(--color-text);
  font-size: 16px;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
}

button{
  border: none;
  background-color: none; 
}

section{
  padding-inline: 15px;
  padding-block: 50px;


  @media(min-width: 575px){
    max-width: 540px;
    width: 100%;
    margin:0 auto;
  }

  @media(min-width: 768px){
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
  }
  @media(min-width: 992px){
    max-width: 960px;
  }
  @media(min-width: 1200px){
      max-width: 1240px;
  }
}

.title{
  width: fit-content;
  font-size: 15px;
  color: #fff;
  padding: 5px;
  font-weight: 500;
  background-color: var(--color-bg);
  border-radius: 8px;

}
.subtitle{
  font-size: 28px;
  font-weight: bold;
}

.icon {
      cursor: pointer;
      font-size: 2.8rem;
      padding: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      clip-path: circle();
      color: #fff;
      background-color: var(--color-base);
      font-weight: 700;
      transition: 0.4s;

        &:hover {
          filter: brightness(1.2);
        }
      }
`

export const titles = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 15px;
`


