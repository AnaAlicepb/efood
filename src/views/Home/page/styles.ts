import styled from 'styled-components'
import { breakPoints } from '../../../main-styles'

export const HomeMain = styled.main`
  padding-top: 70px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakPoints.desktop}) {
    column-gap: 24px;
    row-gap: 24px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 48px;
  }
`
