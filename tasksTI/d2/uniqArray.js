const employees = [
  {
    id: 35,
    role: 'Developer'
  },
  {
    id: 7,
    role: 'QA'
  },
  {
    id: 35,
    role: 'Tech Lead'
  },
  {
    id: 7,
    role: 'DevOps'
  }
];

// [
//   { id: '7', roles: [ 'QA', 'DevOps' ] },
//   { id: '35', roles: [ 'Developer', 'Tech Lead' ] }
// ]

function formatEmployees(employees) {
  const employeesMap = {};

  employees.forEach(({id, role}) => {
    if (!employeesMap[id]) {
      employeesMap[id] = {
        id,
        roles: new Set()
      }
    }
    employeesMap[id].roles.add(role);
  })

  return Object.keys(employeesMap).map(id => ({
    id,
    roles: Array.from(employeesMap[id].roles)
  }))

}
console.log(formatEmployees(employees));
