const { firestore } = require('../../firebase')
const { currency } = require('../../utils')

const mapRating = {
  BR0: 'Classificação Livre',
  BR14: 'Classificação: 14 anos',
  BR16: 'Classificação: 16 anos',
  BR18: 'Classificação: 18 anos'
}

module.exports = {
  Product: {
    price({ price }) {
      return currency(price)
    },

    rating({ rating }) {
      return {
        code: rating,
        text: mapRating[rating]
      }
    }
  }
}
