import styled from 'styled-components'
import { breakPoints } from '../../../main-styles'

export const MainKnowMore = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
  }
  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
