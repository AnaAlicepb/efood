/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Header from '../../../components/Header'
import ProductCard from '../Components/ProductCard'
import { MainKnowMore } from './styles'
import Menu from '../../../model/Menu/Menu'
import { useParams } from 'react-router-dom'
import { useGetRestaurantByIdQuery } from '../../../services/api'

const KnowMorePage = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantByIdQuery(id!)
  let menu: Menu[] = []

  if (restaurant) {
    const { cardapio } = restaurant
    menu = cardapio
  }

  return (
    <>
      <div>
        <Header
          image={restaurant?.capa}
          nationality={restaurant?.tipo}
          restaurantname={restaurant?.titulo}
        />
        <MainKnowMore className="container">
          {menu.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              porcao={product.porcao}
              preco={product.preco}
              nome={product.nome}
              foto={product.foto}
              descricao={product.descricao}
            />
          ))}
        </MainKnowMore>
      </div>
    </>
  )
}

export default KnowMorePage
