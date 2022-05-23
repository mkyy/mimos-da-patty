import styled from 'styled-components';

export const UlWrapper = styled.ul`
  position: fixed;
  top: 0;
  right: 5vw;
  z-index: 100;
  display: flex;
  align-items: center;

  [data-menuanchor] {
    list-style-type: none;
    margin: 0 20px;
  }
  li a {
    text-decoration: none;
    color: #fff;
    font-size: 1.4rem;
    padding-bottom: 5px;
    border-bottom: 2px solid #fff;
    &:hover {
      color: #2d6a91;
    }
  }

  [data-men] {
    list-style-type: none;
    margin: 0 20px;
    a {
      border: none;
    }
    img {
      width: 40px;
    }
  }

  @media (max-width: 425px) {
    right: 0;

    [data-menuanchor] {
      margin: 0 10px;
    }
  }
`;

export const Slide1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 194px;
    max-width: 361px;
    margin: 30px;
  }

  .textSlide1Box {
    max-width: 50%;
    border: 1px solid #000;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 425px) {
    img {
      height: 160px;
      max-width: 300px;
      margin: 30px;
    }
    .textSlide1Box {
      max-width: 80%;
      padding: 0 15px 15px 15px;
    }
  }
`;

export const Slide2 = styled.div`
  display: flex;
  flex: 1 1 auto;
  img {
    height: 70vh;
    width: 33%;
    margin: 0 5px;
  }
`;

export const DivSection2 = styled.div`
  [data-anchor='slide2'] {
    display: none;
  }

  [data-anchor='slide3'] {
    display: none;
  }

  .fp-controlArrow {
    display: none;
  }

  @media (max-width: 425px) {
    [data-anchor='slide1'] {
      .willcontinuate {
        width: 100%;
        height: 60vh;
      }
      .vanish {
        display: none;
      }
    }
    [data-anchor='slide2'] {
      display: table;
      img {
        width: 100%;
        height: 60vh;
      }
    }

    [data-anchor='slide3'] {
      display: table;
      img {
        width: 100%;
        height: 60vh;
      }
    }

    .fp-controlArrow {
      display: block;
    }
  }
`;

export const SlideServices = styled.div`
  font-size: 1.5em;

  .textServiceBox {
    position: absolute;
    top: 10vh;
    left: 5vw;
  }

  .textServiceBox ul li {
    margin: 30px 0;
  }

  img {
    width: 40%;
    position: absolute;
    right: -50px;
    bottom: -50px;
  }

  @media (max-width: 425px) {
    flex-direction: column-reverse;

    .textServiceBox {
      position: absolute;
      top: 5vh;
    }

    .textServiceBox ul li {
      margin: 30px 0;
      position: relative;
      font-size: medium;
      z-index: 200;
    }

    img {
      width: 75%;
      right: 0;
      bottom: 0;
    }
  }
`;

export const SlideContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80vh;

  h1,
  div {
    color: #333333;
  }

  .insta-button img {
    width: 200px;
    height: 70px;
  }
  .wp-button {
    display: inline-block;
    max-width: fit-content;
    padding: 16px;
    border-radius: 8px;
    background-color: #25d366;
    color: #fff;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: fit-content;
  align-self: center;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #000;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transition: 0.4s;
  &:hover {
    color: #333;
    cursor: pointer;
  }
`;
