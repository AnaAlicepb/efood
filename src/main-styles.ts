import { createGlobalStyle } from 'styled-components'

export const Colors = {
  body: '#FFF8F2',
  textPrimary: '#E66767',
  textSecondary: '#FFFFFF',
  footerBackground: '#FFEBD9',
  backgroundTag: '#E66767',
  TagborderColor: '#E66767',
  backgroundButton: '#E66767',
  ProductCardBackground: '#E66767',
  backgroundButtonProduct: '#FFEBD9',
  textCardKnowMore: '#FFEBD9',
  modalBackgroundColor: '#E66767',
  cartAsideBackgroundColor: '#E66767',
  cartBackgroundColor: '#FFEBD9',
  retaurantCardBackgroundColor: '#FFFFFF',
  overlay: '#000'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '400px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style:none;
    text-decoration: none;
  }

  body {
    background-color: ${Colors.body};
    color: ${Colors.textPrimary};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakPoints.desktop}){
      max-width: 80vw;
    }
  }
`
