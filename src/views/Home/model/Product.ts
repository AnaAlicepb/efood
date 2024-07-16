export default class Restaurant {
  public id: number
  public score: string
  public extra_content: string[]
  public image: string
  public restaurant_name: string
  public description: string

  constructor(
    id: number,
    score: string,
    extra_content: string[],
    image: string,
    restaurant_name: string,
    description: string
  ) {
    this.id = id
    this.score = score
    this.extra_content = extra_content
    this.image = image
    this.restaurant_name = restaurant_name
    this.description = description
  }
}
