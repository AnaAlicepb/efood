import facebook from '../../assets/icon/icon-facebook.svg'
import instagram from '../../assets/icon/icon-instagram.svg'
import logoEfood from '../../assets/Logo-Efood/logo-efood.svg'
import twitter from '../../assets/icon/twitter-2-svgrepo-com.svg'
import { FooterContainer, LinkFooter } from './styled'

export default function Footer() {
  return (
    <FooterContainer>
      <a href="/">
        <img src={logoEfood} alt="efood" />
      </a>
      <nav>
        <LinkFooter href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="instagram" />
        </LinkFooter>
        <LinkFooter href="https://web.facebook.com/" target="_blank">
          <img src={facebook} alt="facebook" />
        </LinkFooter>
        <LinkFooter href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="twitter" />
        </LinkFooter>
      </nav>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>{' '}
      <br />
      <p>&copy; 2024, Todos os direitos reservados. Ana Alice Rodrigues</p>
    </FooterContainer>
  )
}
