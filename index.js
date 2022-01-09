// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];



let findMatching = (drivers,name) => {
    return drivers.filter((driver) => {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

let fuzzyMatch = (drivers, name) => {
    return drivers.filter((driver) => {
        return driver.startsWith(name)
    })
}

let matchName = (drivers, name) => {
    return drivers.filter((driver) => {
        return driver.name === name
    })
}

// console.log(findMatching(drivers,"Bobby"))
// console.log(fuzzyMatch(drivers,"A"))
console.log(matchName(drivers, "Bobby"))