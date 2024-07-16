import styled from 'styled-components'
import { PropsCard } from '.'
import { Colors, breakPoints } from '../../../../main-styles'
import { Link } from 'react-router-dom'

export const ImageCard = styled.div<
  Omit<
    PropsCard,
    'restaurant_name' | 'description' | 'score' | 'extra_content' | 'id'
  >
>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 217px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  &:last-child {
    margin-right: 0px;
  }
`
export const ContainerCard = styled.div`
  position: relative;
  border: solid 1px ${Colors.TagborderColor};
  width: 472px;
  height: 400px;
  background-color: ${Colors.retaurantCardBackgroundColor};

  @media (max-width: ${breakPoints.desktop}) {
    width: 100%;
    height: 420px;
  }
  @media (max-width: ${breakPoints.tablet}) {
    height: 450px;
  }

  p {
    margin-top: 16px;
    margin-bottom: 10px;
    padding: 0 8px;
    font-size: 14px;
    font-height: 1.5;
  }
`
export const NameAndScore = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  margin-top: 8px;
`
export const Score = styled.span`
  text-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  img {
    margin-left: 8px;
    width: 18px;
  }
`

export const ButtonCard = styled(Link)`
  background-color: ${Colors.backgroundButton};
  color: ${Colors.textSecondary};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  position: absolute;
  bottom: 8px;
  left: 8px;
`
