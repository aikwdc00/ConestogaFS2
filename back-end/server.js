const express = require('express')
const app = express()
const graphqlHttp = require('express-graphql');

const db = require('./database')
const employeeRoute = require('./routes/employee')

const port = 5001

app.use(express.json())

app.use('/employee', employeeRoute);
// app.use(
//   '/graphql',
//   graphqlHttp({
//     schema: graphqlSchema,
//     rootValue: graphqlResolver,
//     graphiql: true,
//     formatError(err) {
//       if (!err.originalError) {
//         return err;
//       }
//       const data = err.originalError.data;
//       const message = err.message || 'An error occurred.';
//       const code = err.originalError.code || 500;
//       return { message: message, status: code, data: data };
//     }
//   })
// );

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

db.then(result => {
  console.log('connected mongoose', result)
  app.listen(port, (err) => {
    if (err) return
    console.log(`Example app listening on port ${port}`)
  })
})
  .catch(err => console.log('err', err));
