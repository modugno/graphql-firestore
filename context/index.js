const { ValidationError } = require('apollo-server')

module.exports = () => ({
  catchException() {
    throw new ValidationError('Ocorreu um erro, tente novamente!')
  }
})
