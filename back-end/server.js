/**
 * Group members as below: 
 * Chelsa, Patel
 * Fu-Ting, Li
 * Jijo, Raju
 * Stuti Dilipbhai, Jayswal
 */


import express from 'express';
const app = express()
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { readFile } from 'node:fs/promises'

import { connectToDb, getDb } from './database/index.js'
// import employeeRoute from './routes/employee.js'
import resolvers from './graphql/resolvers.js'

const port = 3000
const typeDefs = await readFile('./graphql/schema.graphql', 'utf8')

app.use(express.json())
// app.use('/ep', employeeRoute); // rest api

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

await apolloServer.start();

app.use('/graphql', expressMiddleware(apolloServer))

connectToDb((url, err) => { // mongodb
  if (err) {
    throw new Error('No database found!');
  }

  app.listen(port, () => {
    console.log(`server started on port ${port}.`)
    console.log(`GraphQl server started on Http://localhost:${port}`)
  })
})

// db.then(result => { // mongoose
//   // console.log('connected mongoose', result)
//   app.listen(port, (err) => {
//     if (err) return
//     console.log(`Example app listening on port ${port}`)
//   })
// })
//   .catch(err => console.log('err', err));
