import styled from 'styled-components'
import { Colors, breakPoints } from '../../../../main-styles'

export const ProductCardContainer = styled.div`
  background-color: ${Colors.ProductCardBackground};
  width: 320px;
  height: 338px;
  padding: 8px;
  text-align: left;
  color: ${Colors.textSecondary};
  position: relative;

  @media (max-width: ${breakPoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${breakPoints.tablet}) {
    height: 360px;
  }

  img {
    width: 100%;
    height: 167px;
  }

  h2 {
    margin-top: 8px;
    font-size: 16px;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
    height: 88px;
    line-height: 1.2;
    color: ${Colors.textCardKnowMore};
  }

  button {
    background-color: ${Colors.backgroundButtonProduct};
    color: ${Colors.textPrimary};
    padding: 4px 0;
    width: calc(100% - 16px);
    border: none;
    font-weight: bold;
    position: absolute;
    bottom: 8px;
  }

  @media (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &.itIsNotVisible {
    display: none;
  }

  .overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
`
export const Card = styled.div`
  background-color: ${Colors.modalBackgroundColor};
  display: flex;
  color: ${Colors.textSecondary};
  position: relative;
  z-index: 1;

  @media (max-width: ${breakPoints.desktop}) {
    width: 100%;
  }
  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    height: 95%;
  }
  div {
    margin-top: 32px;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
`

export const Paragraph = styled.p`
  font-size: 14px;
  width: 650px;
  height: 176px;
  margin-bottom: 16px;
  line-height: 1.7;

  @media (max-width: ${breakPoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${breakPoints.tablet}) {
    height: auto;
    line-height: 1.4;
  }
`
export const ToAdd = styled.button`
  background-color: ${Colors.backgroundButtonProduct};
  color: ${Colors.textPrimary};
  height: 28px;
  text-algin: center;
  padding: 4px 8px;
  font-weight: bold;
  font-size: 14px;
  border: none;

  @media (max-width: ${breakPoints.tablet}) {
    margin: 0 auto;
    display: flex;
  }

  @media (max-width: ${breakPoints.mobile}) {
    height: auto;
  }
`

export const DivImage = styled.div`
  max-width: 280px;
  width: 100%;
  height: 280px;
  margin: 32px;

  @media (max-width: ${breakPoints.desktop}) {
    max-width: 40%;
  }

  @media (max-width: ${breakPoints.tablet}) {
    max-width: calc(100% - 64px);
    height: 280px;
  }

  @media (max-width: ${breakPoints.mobile}) {
    height: calc(80vw - 64px);
  }
  img {
    width: 100%;
    height: 100%;
  }
`
export const DivContent = styled.div`
  @media (max-width: ${breakPoints.desktop}) {
    width: calc(64px - (40% - 100%));
  }
  @media (max-width: ${breakPoints.tablet}) {
    margin: 0px !important;
    width: 100%;
    padding: 0 32px;
    justify-content: center;
  }
`

export const Close = styled.button`
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`
