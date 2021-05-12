const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')
const context = require('./context')

const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers,
  context
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => console.log(`Running on ${url}`))
