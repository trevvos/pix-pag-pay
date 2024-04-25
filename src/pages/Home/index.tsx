import {
  ButtonLogin,
  ButtonRegister,
  Description,
  FirstSteps,
  FirstStepsContent,
  HomeContainer
} from './styles'
import BannerPrincipal from '../../assets/banner_principal.png'
import Register from '../../assets/register.svg'

export function Home() {
  return (
    <>
      <HomeContainer>
        <Description>
          <p>
            <span className="highlight">Pix Pag Pay</span> é uma plataforma que
            recompensa usuários por responderem perguntas e interagirem com
            anúncios. <span className="highlight">Ganhe dinheiro</span>{' '}
            facilmente enquanto compartilha sua opinião! Junte-se a nós e comece
            a ganhar dinheiro compartilhando suas opiniões hoje mesmo!
            <span className="highlight">Registre-se</span> agora e descubra como
            é fácil e divertido participar do{' '}
            <span className="highlight">Pix Pag Pay</span>!
          </p>
          <img src={BannerPrincipal} alt="" />
        </Description>
      </HomeContainer>
      <FirstSteps>
        <p>Passos para começar</p>
      </FirstSteps>
      <FirstStepsContent>
        <img src={Register} alt="" />
        <div>
          <p>1 . Registre-se gratuitamente em nossa plataforma.</p>
          <p>
            2 . Comece a acumular pontos respondendo perguntas e interagindo com
            anúncios.
          </p>
          <p>3 . Resgate seus pontos por dinheiro ou prêmios incríveis!</p>

          <div className="buttons-steps">
            <ButtonRegister>Registrar</ButtonRegister>
            OU
            <ButtonLogin>Entrar</ButtonLogin>
          </div>
        </div>
      </FirstStepsContent>
    </>
  )
}
