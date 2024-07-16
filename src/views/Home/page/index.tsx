import Header from '../../../components/Header'
import Card from '../Components/Card'
import { HomeMain } from './styles'
import { useGetAllRestaurantsQuery } from '../../../services/api'

const HomePage = () => {
  const { data: restaurant } = useGetAllRestaurantsQuery()

  function tagArray(primary: string, secondary: boolean): string[] {
    const array: string[] = []
    if (secondary === true) {
      array.push('Destaque da semana')
      array.push(primary)
      return array
    }
    array.push(primary)
    return array
  }

  return (
    <>
      <Header />
      <HomeMain className="container">
        {restaurant?.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            description={restaurant.descricao}
            extra_content={tagArray(restaurant.tipo, restaurant.destacado)}
            image={restaurant.capa}
            restaurant_name={restaurant.titulo}
            score={restaurant.avaliacao}
          />
        ))}
      </HomeMain>
    </>
  )
}

export default HomePage
