const fetchRequest = async (body) => {
  try {
    const respond = await fetch("/graphql", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body)
    })

    if (!respond.ok) {
      throw new Error('Fetch Error')
    }

    if (respond.ok) {
      const result = await respond.json()
      return result
    }
  }
  catch (err) {
    console.log('err', err)
  }
}

// get employee list
export const getEmployeeData = async () => {

  const graphqlQuery = {
    query: `query ExampleQuery {
          employeeList {
            _id
            FirstName
            LastName
            DateOfJoining
            Age
            Title
            Department
            employeeType
            currentStatus
          }
        }`
  }
  const fetchData = await fetchRequest(graphqlQuery)
  return fetchData
}

// get one
export const getEmployee = async (id) => {

  const graphqlQuery = {
    query: `query EmployeeAdd($id: String) {
            findEmployee(id: $id) {
              _id
              Age
              FirstName
              LastName
              DateOfJoining
              Department
              Title
              currentStatus
              employeeType
            }
          }`,
    variables: {
      id
    }
  };

  const fetchData = await fetchRequest(graphqlQuery)
  if (fetchData?.data?.findEmployee) {
    return fetchData.data.findEmployee
  }
}

// add new employee
export const addEmployeeHandler = async (e) => {
  const graphqlQuery = {
    query: `mutation EmployeeAdd($employee: EmployeeInput) {
            employeeCreate(employee: $employee) {
              _id
              Age
              FirstName
              LastName
              DateOfJoining
              Department
              Title
              currentStatus
              employeeType
            }
          }`,
    variables: {
      employee: {
        ...e,
        Age: parseInt(e.Age)
      }
    }
  };

  const fetchData = await fetchRequest(graphqlQuery)
  if (fetchData?.data?.employeeCreate) {
    return fetchData.data.employeeCreate
  }
}

// update employee
export const updateEmployeeHandler = async (e) => {

  const graphqlQuery = {
    query: `mutation EmployeeUpdate($employee: UpdateInput) {
            updateEmployee(employee: $employee) {
              _id
              Age
              FirstName
              LastName
              DateOfJoining
              Department
              Title
              currentStatus
              employeeType
            }
          }`,
    variables: {
      employee: {
        ...e,
      }
    }
  };

  const fetchData = await fetchRequest(graphqlQuery)
  if (fetchData?.data?.updateEmployee) {
    return fetchData.data.updateEmployee
  }
}

// delete employee
export const DeleteEmployee = async (id) => {

  const graphqlQuery = {
    query: `mutation EmployeeDelete($id: String) {
            deleteEmployee(id: $id) {
              _id
              Age
              FirstName
              LastName
              DateOfJoining
              Department
              Title
              currentStatus
              employeeType
            }
          }`,
    variables: {
      id
    }
  };

  const fetchData = await fetchRequest(graphqlQuery)
  if (fetchData?.data?.deleteEmployee) {
    return fetchData.data.deleteEmployee
  }
}