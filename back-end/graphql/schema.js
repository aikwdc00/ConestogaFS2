const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Employee {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
    }

    input EmployeeInputData {
        email: String!
        name: String!
        password: String!
    }

    type RootQuery {
        user: Employee!
    }

    type RootMutation {
        createEmployee(employeeInput: EmployeeInputData): Employee!
        updateStatus(status: String!): Employee!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
