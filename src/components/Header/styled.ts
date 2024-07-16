import styled from 'styled-components'
import backgroundHEader from '../../assets/Logo-Efood/header-background.svg'
import { PropsHeader } from '.'
import { Link } from 'react-router-dom'
import { Colors, breakPoints } from '../../main-styles'

export const HeaderTitle = styled.h2`
  font-size: 36px;
  font-weight: 900;
  max-width: 539px;
  height: 84px;
  margin: 0 auto;
`
export const LinkButton = styled(Link)`
  font-size: 18px;
  color: ${Colors.textPrimary};
`
export const LinkA = styled.a`
  font-size: 18px;
  color: ${Colors.textPrimary};
  display: flex;
  cursor: pointer;
`
export const HeaderBanner = styled.div<
  Omit<PropsHeader, 'typeheader' | 'nationality' | 'restaurantname'>
>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 280px;
  position: relative;

  h2,
  h3 {
    color: ${Colors.textSecondary};
    font-size: 32px;
  }

  h2 {
    font-weight: 100;
  }

  h3 {
    position: absolute;
    bottom: 32px;
    font-weight: bold;
  }
`

export const HeaderContaner = styled.header<PropsHeader>`
  background-image: url(${backgroundHEader});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 56px;
  height: ${(props) => (props.typeheader === 'normal' ? '384px' : 'auto')};

  ${HeaderTitle} {
    display: ${(props) => (props.typeheader === 'normal' ? 'flex' : 'none')};
  }

  ${LinkButton} ,${LinkA} {
    display: ${(props) => (props.typeheader === 'normal' ? 'none' : 'initial')};
  }

  .container {
    padding-top: 54px;
    text-align: center;

    nav {
      margin-bottom: ${(props) =>
        props.typeheader === 'normal' ? '130px' : '65px'};
      display: flex;
      align-items: center;
      justify-content: ${(props) =>
        props.typeheader === 'normal' ? 'center' : 'space-between'};
      @media (max-width: ${breakPoints.tablet}) {
        margin-bottom: 50px;
      }
    }
  }

  ${HeaderBanner} > .container {
    text-align: left;
    padding: 0;
    padding-top: 24px;
  }

  ${HeaderBanner} {
    display: ${(props) => (props.typeheader === 'normal' ? 'none' : 'flex')};
  }
`
