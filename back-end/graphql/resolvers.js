import { GraphQLScalarType, GraphQLError } from 'graphql'
import { employeeData, addEmployeeData } from '../data/index.js'

const GraphQlDateResolver = new GraphQLScalarType({
  name: 'DateHandle',
  description: 'A date type for GraphQl',
  serialize(value) {
    return new Date(value).toDateString()
  },
  parseValue(value) {
    return value
  }
})


const resolvers = {
  Query: {
    employeeList: () => employeeData,
  },
  DateHandler: GraphQlDateResolver,
  Mutation: {
    employeeAdd: (_root, { employee }) => {
      if (!employee) {
        throw new GraphQLError('Invalid argument value', {
          extensions: {
            code: 422,
          },
        });
      }

      employee.currentStatus = 1
      addEmployeeData(employee)
      return employee;
    }
  }
};

export default resolvers