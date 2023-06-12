import express from 'express';
const app = express()
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { readFile } from 'node:fs/promises'

import db from './database/index.js'
// import employeeRoute from './routes/employee.js'
// import typeDefs from './graphql/typeDefs.js'
import resolvers from './graphql/resolvers.js'

const port = 3000

app.use(express.json())

// app.use('/ep', employeeRoute);

const typeDefs = await readFile('./graphql/schema.graphql', 'utf8')

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

await apolloServer.start();

app.use('/graphql', expressMiddleware(apolloServer))

db.then(result => {
  // console.log('connected mongoose', result)
  app.listen(port, (err) => {
    if (err) return
    console.log(`Example app listening on port ${port}`)
  })
})
  .catch(err => console.log('err', err));
