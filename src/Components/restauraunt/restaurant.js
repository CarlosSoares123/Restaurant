import styled from 'styled-components'

export const restaurantContainer = styled.section`
  width: 100%;
  height: 100%;

`

export const cards = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;

  display: grid;
  gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    display: flex;
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    background-color: var(--color-card);
    position: relative;

    .star {
      position: absolute;
      top: 10px;
      left: 10px;
      padding: 5px 10px;
      border-radius: 10px;
      background-color: var(--color-base);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    figure {
      width: 100%;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .text {
      padding: 15px;

      .span {
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: space-between;

        span:nth-child(2) {
          color: var(--color-text);
        }
      }
    }
  }
`