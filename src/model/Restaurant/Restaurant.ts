import Menu from '../Menu/Menu'

class Retaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]

  constructor(
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: Menu[]
  ) {
    this.id = id
    this.titulo = titulo
    this.destacado = destacado
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.cardapio = cardapio
  }
}

export default Retaurant
