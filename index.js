const { ApolloServer } = require('apollo-server')
const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { addResolversToSchema } = require('@graphql-tools/schema')
const { join } = require('path')
const resolvers = require('./resolvers')
const context = require('./context')

const schema = loadSchemaSync(join(__dirname, 'schema/schema.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const server = new ApolloServer({
  schema: addResolversToSchema({ schema, resolvers }),
  context,
  introspection: true,
  playground: true
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => console.log(`Running on ${url}`))
