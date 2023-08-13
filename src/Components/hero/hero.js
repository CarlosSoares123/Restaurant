import Styled from 'styled-components'

export const hero_container = Styled.section`    
  width: 100%;
  max-width: 100vw ;
  height: 1050px;

  padding-top: 120px;
  display: grid;
  gap: 70px;
  
  background-color: var(--color-bg);

  @media(min-width: 575px){
    padding-inline: 30px;
  }
  @media(min-width: 768px){
    height: 1150px;
    padding-inline: 70px;
  }
  @media(min-width: 992px){
    height: 100vh;
    padding-top: 120px;
    padding-inline: 40px;
    grid-template-columns:  0.9fr 1fr;
    align-items: center;
    justify-content: center;
  }  

  .container_text{
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    @media(min-width: 992px){
        gap: 50px;
    }
    @media(min-width: 1200px){
        gap: 35px;
    }
    
    
    .text{
      display: grid;
      gap: 15px;
      

      h3{
        color: orange;
        font-family: "Caveat", sans-serif;
        font-size: 40px;

      }
      h2{
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 40px;
        font-weight: 900;
        

        @media(min-width: 575px){
          font-size: 50px;
          line-height: 70px;
        }
        @media(min-width: 768px){
          font-size: 60px;
          line-height: 70px;
        }
        @media(min-width: 992px){
          font-size: 55px;
          line-height: 65px;
        }
        @media(min-width: 1200px){
          font-size: 60px;
          line-height: 75px;
        }
      }
    }

    .search{
      width: 100%;
      padding: 5px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 15px;
      
      
      span{
        color: var(--color-text);
        font-size: .8rem;
        
        @media(min-width: 992px){
          font-size: 1.1rem;
        }
      }
      button{
        padding: 15px 28px;
        background-color: var(--color-base);
        border-radius: 10px;
        font-weight: 700;
        color: #fff;
        font-size: .8rem;
        @media(min-width: 992px){
          font-size: 1.1rem;
        }
      }
    }
  }


  .imgs{
    width: 100%;
    height: 350px;
    position: relative;
    
    

    figure:nth-child(1){
      position: absolute;
      top: -25px;
      right: 0;
      width: 40%;
      height: 30%;
      background-color: var(--color-base);
      border-radius: 10px;
      padding: 10px;
      z-index: 3;

      img{
      width: 100%;
      height: 100%;
      border-radius: 10px;
      }

      @media (min-width: 575px){
        width: 30%;
        height: 35%;
      }
      @media (min-width: 768px){
        width: 30%;
        height: 40%;
      }
      @media(min-width: 992px){
        width: 30%;
        height: 33%;
      }
      @media(min-width: 1200px){
        width: 28%;
        height: 40%;
      }
    }
    figure:nth-child(2){
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 70%;
      background-color: #f29766;
      
      border-radius: 10px;
      z-index: 2;

      img{
      width: 100%;
      height: 100%;
      }

      @media (min-width: 575px){
        width: 60%;
        height: 85%;
      }
      @media (min-width: 768px){
        width: 55%;
        height: 95%;
      }
      @media (min-width: 992px){
        width: 65%;
        height: 80%;
      }
      @media (min-width: 1200px){
        width: 55%;
        height: 95%;
      }
    }
    figure:nth-child(3){
      position: absolute;      
      bottom: -50px;
      left: 5px;
      width: 60%;
      height: 40%;
      background-color: #ff6831;
      border-radius: 10px;
      z-index: 1;

      img{
      width: 100%;
      height: 100%;
      }

      @media (min-width: 575px){
        width: 50%;
        height: 35%;
      }
      @media (min-width: 768px){
        bottom: -50px;
        left: -5px;
        width: 35%;
        height: 40%;
      }
      @media (min-width: 992px){
        bottom: -40px;
        left: -30px;
        width: 50%;
        height: 40%;
      }
      @media (min-width: 1200px){
        bottom: -80px;
        left: -15px;
        width: 45%;
        height: 40%;
      }
    }
  }


  .icons{
    display: flex;
    gap: 8px;

    .icon {
        cursor: pointer;
        font-size: 30px;
        padding: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        clip-path: circle();
        color: #fff;
        background-color: var(--color-base);
        font-weight: 700;
        transition: .4s;
  
        &:hover{
          filter: brightness(1.2);
        }
      }
  }
`
