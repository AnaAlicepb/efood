import star from '../../../../assets/icon/star.svg'
import Tag from '../Tag'
import {
  ButtonCard,
  ContainerCard,
  ImageCard,
  Infos,
  NameAndScore,
  Score
} from './styles'

export type PropsCard = {
  id: number
  restaurant_name: string
  description: string
  score: number
  extra_content: string[]
  image: string
}

export default function Card({
  id,
  restaurant_name,
  description,
  score,
  extra_content,
  image
}: PropsCard) {
  return (
    <ContainerCard>
      <Infos>
        {extra_content.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <ImageCard image={image}></ImageCard>
      <NameAndScore>
        <h2>{restaurant_name}</h2>
        <Score>
          {score}
          <img src={star} alt="Estrela" />
        </Score>
      </NameAndScore>
      <p>{description}</p>
      <ButtonCard to={`/KnowMore/${id}`}>Saiba mais</ButtonCard>
    </ContainerCard>
  )
}
