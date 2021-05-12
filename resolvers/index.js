const Query = require('./Query')
const Mutation = require('./Mutation')
const types = require('./types')

module.exports = {
  Query,
  Mutation,
  ...types
}
