import styled from 'styled-components'
import { Colors, breakPoints } from '../../main-styles'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${Colors.footerBackground};
  text-align: center;
  padding-top: 40px;
  margin-top: 120px;

  nav {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 80px;
  }

  p {
    font-size: 10px;
    max-width: 480px;
    width: 100%;
    display: block;
    margin: 0 auto;
    @media (max-width: ${breakPoints.tablet}) {
      width: auto;
      padding: 0 20px;
    }
  }
`
export const LinkFooter = styled.a`
  width: 24px;
  height: 24px;
  overflow: hidden;
  margin-right: 8px;
  img {
    width: 100%;
  }
`
