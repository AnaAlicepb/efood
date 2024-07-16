class Menu {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string

  constructor(
    id: number,
    foto: string,
    preco: number,
    nome: string,
    descricao: string,
    porcao: string
  ) {
    this.id = id
    this.foto = foto
    this.preco = preco
    this.nome = nome
    this.descricao = descricao
    this.porcao = porcao
  }
}

export default Menu
