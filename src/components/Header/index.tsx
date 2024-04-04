import { Form, HeaderContainer, HeaderContent, Logomarca } from './styles'
import Logo from '../../assets/logo.svg'
import LogoForm from '../../assets/logo-form.svg'
import Elipse1 from '../../assets/elipse1.svg'
import Elipse3 from '../../assets/elipse3.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Form>
        <header>
          <img src={LogoForm} alt="" width={60} />
          <p>P.P.P - PIX.PAG.PAY</p>
        </header>
      </Form>
      <HeaderContent>
        <Logomarca>
          <img src={Logo} alt="" width="127" height="90" />
          PIX <span className="dot">.</span>PAG<span className="dot">.</span>PAY
        </Logomarca>
        <p>
          Ganhe dinheiro <br />
          respondendo perguntas
        </p>
      </HeaderContent>
      <span className="elise1">
        <img src={Elipse1} alt="" />
      </span>
      <span className="elise2">
        <img src={Elipse3} alt="" />
      </span>
      <span className="elise3">
        <img src={Elipse3} alt="" />
      </span>
    </HeaderContainer>
  )
}
