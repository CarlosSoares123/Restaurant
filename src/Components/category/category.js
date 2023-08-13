import styled from 'styled-components'

export const categoryContainer = styled.section`
  width: 100%;
  height: 100%;  
  
`
export const titles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const carrousel = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  margin-block-start: 15px;


  .slick-slide div {
    margin-inline-end: 15px;
    margin-inline-start: 3px;
    @media (min-width: 768px) {
      margin-inline-end: 5px;
      margin-inline-start: 0px;
      
    }
  }
  .slick-next {
    right: -90px;
  }
  .slick-dots li.slick-active button:before {
    color: var(--color-base) !important;
  }
  .slick-dots li button:before {
    color: var(--color-base) !important;
    font-size: 0.7rem !important;
    top: 25px !important;
  }
`
export const box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: var(--color-card);
  transition: .4s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff6831;
    color: #fff;
    
  }
  @media (min-width: 768px) {
    height: 100%;
  }

  .container {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    @media (min-width: 768px) {
    }

    figure {
      width: 100%;
      height: 7.3rem;
      border-radius: 15px;
      display: grid;
      place-content: center;

      img {
        width: 5rem;
        height: 5rem;
        padding: 15px;
        background-color: #fff;
        clip-path: circle();
      }
    }
    .description {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span:nth-child(1) {
        font-weight: 600;
        color: #000;
      }
      span:nth-child(2) {
        font-size: 12px;
        color: var(--color-text);
      }
    }
  }
`

