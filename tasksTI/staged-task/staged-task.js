const users = [
  {
    name: 'Alice',
    city: 'London',
    family: {
      spouse: { name: 'Ivan' },
      child: { name: 'Nik' }
    }
  },
  {
    name: 'Mike',
    city: 'Manchester',
    family: {
      spouse: { name: 'Ivan' },
      child: {
        name: 'Nik',
        family: {
          spouse: { name: 'Inna' },
          child: { name: 'Boby' }
        }
      }
    }
  },
  {
    name: 'Alice',
    city: 'London',
    family: {
      spouse: { name: 'Ivan' },
      child: { name: 'Nik' }
    }
  },
  {
    name: 'Irina',
    city: 'Monaco',
    family: {
      spouse: { name: 'Sergio' },
    }
  },
  {
    name: 'Bruce',
    city: 'Paris',
    family: {}
  },
  {
    name: 'Irina',
    city: 'Monaco',
    family: {
      spouse: { name: 'Sergio' },
    }
  },
];

const taxMatcher = {
  Paris: '10%',
  Monaco: '13%',
  Manchester: '11%',
  London: '15%'
}

// STAGE_1
// Get the list of only unique user
[ 'Alice', 'Mike', 'Bruce', 'Irina']

// STAGE_2
// Update user data with taxRate field
const example = {
  name: 'Bruce',
  city: 'Paris',
  family: {},
  taxRate: '10%'
}

// STAGE_3
// Get the list of all users with family members names as well
const example2 =   {
  name: 'Mike',
  city: 'Manchester',
  family: {
    spouse: { name: 'Ivan' },
    child: {
      name: 'Nik',
      family: {
        spouse: { name: 'Inna' },
        child: { name: 'Boby' }
      }
    }
  }
};
['Mike', 'Ivan', 'Inna', 'Bobby']

// STAGE_4
// Create the component with next functionality:
// - fetch data from API (response will be users json object)
// Let think that we have already implemented Service (UserService.getUsers())
// - display users list
// - we can manually edit user taxRate
// - we should POST new taxTate to data base
// Let think that we have already implemented Service method (UserService.updateUser(userName))
// we also should display message base on success/failed response
