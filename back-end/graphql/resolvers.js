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

const findEmployeeOne = async (_root, { id }) => {
  if (!id) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 422,
      },
    });
  }

  const newEmployee = await Employee.findById(id)
  return newEmployee
}

// update one
const updateEmployeeHandler = async (_root, { employee }) => {
  if (!employee) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 422,
      },
    });
  }

  const result = await Employee.findOneAndUpdate(employee)
  return result
}

// delete on
const DeleteEmployeeOne = async (_root, { id }) => {
  if (!id) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 422,
      },
    });
  }

  const deleteOne = await Employee.findOneAndDelete(id)

  if (deleteOne) {
    return {
      result: 'success',
      isSuccess: true,
    }
  }
}

// resolvers
const resolvers = {
  Query: {
    employeeList: async () => await Employee.find(),
    findEmployee: findEmployeeOne,
  },
  DateHandler: GraphQlDateResolver,
  Mutation: {
    employeeCreate: addEmployeeHandler,
    updateEmployee: updateEmployeeHandler,
    deleteEmployee: DeleteEmployeeOne
  }
};



export default resolvers