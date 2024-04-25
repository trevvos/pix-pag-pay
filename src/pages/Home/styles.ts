import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 74rem;
  margin-left: auto;
  margin-right: auto;
`

export const Description = styled.section`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme['gray-500']};

  p {
    font-size: 1.4rem;
    width: 500px;
    line-height: 47px;
    letter-spacing: 2px;
  }

  img {
    width: 506px;
    height: 393px;
  }

  .highlight {
    background-color: ${props => props.theme['gray-200']};
    padding: 5px;
  }
`

export const FirstSteps = styled.section`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1.4rem;

  background-color: ${props => props.theme['purple-500']};
  color: ${props => props.theme.white};

  p {
    max-width: 74rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    letter-spacing: 2px;
  }
`

export const FirstStepsContent = styled.div`
  max-width: 74rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;

  img {
    width: 300px;
    height: 200px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: ${props => props.theme['gray-500']};
  }

  .buttons-steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
  }
`

const BaseButton = styled.button`
  width: 15rem;
  height: 2.5rem;
  font-size: 1.225rem;
  color: ${props => props.theme.white};
  border: 0;
  border-radius: 3px;
  cursor: pointer;
`

export const ButtonRegister = styled(BaseButton)`
  background-color: ${props => props.theme['purple-500']};
`

export const ButtonLogin = styled(BaseButton)`
  background-color: ${props => props.theme['purple-300']};
`
