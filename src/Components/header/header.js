import styled from 'styled-components'

export const headerContainer = styled.header`
  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  h1 {
    font-size: 40px;
    font-weight: 700;
    font-family: 'Poppins';
    color: #fff;
  }
  /* 
  @media (min-width: 768px) {
    padding-inline: 5.4rem;
  }
  @media (min-width: 992px) {
    padding-inline: 6.6rem;
  }
  @media (min-width: 992px) {
    padding-inline: 11rem;
  } */

  .buttons {
    display: flex;
    gap: 10px;
    align-items: center;

    .menuBurger {
      @media (min-width: 992px) {
        display: none;
      }
    }

    .sign {
      display: none;
      @media (min-width: 992px) {
        all: unset;
        border: 1px solid #fff;
        border-radius: 10px;
        padding: 10px 35px;
        color: #fff;
        cursor: pointer;
        transition: .4s ease;
        &:hover, :focus{
          background-color: var(--color-base);
          border-color: var(--color-base);
        }
      }
    }
  }
`

export const navBar = styled.nav`
  width: 100%;
  max-width: 280px;
  height: 100%;
  padding: 10px 15px;

  position: fixed;
  top: 0;
  left: ${({ visible }) => (visible ? '0' : '-300px')};
  z-index: 101;

  transition: 0.4s ease;

  background-color: var(--color-base);

  @media (min-width: 992px) {
    all: unset;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;

    @media (min-width: 992px) {
      display: none;
    }
  }

  ul {
    display: grid;
    gap: 15px;

    @media (min-width: 992px) {
      display: flex;
      flex-direction: row;
    }

    li > a {
      font-size: 20px;
      color: #fff;
      cursor: pointer;
      transition: all.4s ease;

      &:hover {
        color: var(--color-text);
        padding: 5px;
        letter-spacing: 3px;
      }
      @media (min-width: 992px) {
        &:hover {
          color: var(--color-base);
        }
      }
    }
  }
`

export const overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: hsla(0, 0%, 100%, 0.7);
  transition: opacity 0.3s ease-in-out;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  @media (min-width: 992px) {
    display: none;
  }
`