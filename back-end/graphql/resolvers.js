import { GraphQLScalarType, GraphQLError } from 'graphql'
// import { employeeData, addEmployeeData } from '../data/index.js' // test data
import Employee from '../models/employee.js'

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
// mutation function
const addEmployeeHandler = async (_root, { employee }) => {
  if (!employee) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 422,
      },
    });
  }

  const newEmployee = await new Employee({ ...employee, })
  const createEp = await newEmployee.save()
  return createEp
}

// resolvers
const resolvers = {
  Query: {
    employeeList: async () => await Employee.find(),
  },
  DateHandler: GraphQlDateResolver,
  Mutation: {
    employeeCreate: addEmployeeHandler
  }
};



export default resolvers