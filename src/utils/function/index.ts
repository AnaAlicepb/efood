export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getDescription = (
  description: string,
  quantityOfCharacter: number
) => {
  if (description.length > 95) {
    return description.slice(0, quantityOfCharacter) + '...'
  }
  return description
}
