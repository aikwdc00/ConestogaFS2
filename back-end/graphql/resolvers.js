import { GraphQLScalarType, GraphQLError } from 'graphql'
import { employeeData, addEmployeeData } from '../data/index.js'
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


const resolvers = {
  Query: {
    employeeList: async () => {
      const list = await Employee.find()

      if (!list) {
        throw new GraphQLError('No Employee found', {
          extensions: {
            code: 422,
          },
        });
      }

      console.log('list', list)
      return list
    },
  },
  DateHandler: GraphQlDateResolver,
  Mutation: {
    employeeAdd: async (_root, { employee }) => {
      if (!employee) {
        throw new GraphQLError('Invalid argument value', {
          extensions: {
            code: 422,
          },
        });
      }

      const newEmployee = new Employee({ ...employee, })
      const createEp = await newEmployee.save()
      return { ...createEp._doc, _id: createEp._id.toString() }
    }
  }
};

export default resolvers