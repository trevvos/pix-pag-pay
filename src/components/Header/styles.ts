import styled from 'styled-components'

export const HeaderContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  background-color: ${props => props.theme['purple-500']};
  color: ${props => props.theme.white};

  .elise1 img {
    transform: rotate(180deg); /* Rotaciona a imagem em 45 graus */
    width: 190px; /* Defina a largura desejada para a imagem */
    height: 210px; /* Defina a altura desejada para a imagem */
    position: absolute;
    margin-top: -320px;
    left: 0;
  }

  .elise2 img {
    width: 200px; /* Defina a largura desejada para a imagem */
    height: 240px; /* Defina a altura desejada para a imagem */
    position: absolute;
    margin-top: -400px;
    right: 0;
  }

  .elise3 img {
    width: 200px; /* Defina a largura desejada para a imagem */
    height: 240px; /* Defina a altura desejada para a imagem */
    position: absolute;
    margin-top: -150px;
    right: 0;
    margin-right: 280px;
    transform: rotate(185deg);
  }
`

export const HeaderContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  max-width: 74rem;
  height: 300px;

  p {
    z-index: 10;
    font-size: 36px;
    margin-left: 25px;
    margin-top: 35px;
    line-height: 50px;
    letter-spacing: 3px;
    position: relative;
  }

  .dot {
    color: ${props => props.theme['purple-300']};
  }
`

export const Form = styled.div`
  background-color: ${props => props.theme.white};
  width: 300px;
  height: 350px;
  position: absolute;
  border-radius: 10px;
  right: 0;
  margin-right: 50px;
  margin-top: 30px;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transform: rotate(4deg);
  color: black;
  padding: 10px;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    font-weight: bold;
  }
`

export const Logomarca = styled.span`
  font-size: 3.5rem;
  letter-spacing: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 999;
  position: relative;
`
