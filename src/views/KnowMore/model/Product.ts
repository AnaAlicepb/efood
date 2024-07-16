export class Product {
  public id: number
  public name_product: string
  public image_product: string
  public description_product: string

  constructor(
    id: number,
    name_product: string,
    image_product: string,
    description_product: string
  ) {
    this.id = id
    this.name_product = name_product
    this.image_product = image_product
    this.description_product = description_product
  }
}
