
function stringLength (myString) {
  return myString.length // length is a property
}

const value = stringLength('allan')

console.log('my strings length', value)

const name = 'a ll an'

const splitStr = name.split(' ') // split is a method of strings

console.log(splitStr)


const listA = [2, 3, 3]

console.log(listA.length)

listA.push(5)

console.log(listA)

listA.pop()

console.log(listA)

const newList = listA.map(function (item) {
  return item * 2
})


console.log(newList)

function multiplyBytwo (value) {
  return value * 5 + 2
}

const newList2 = listA.map(multiplyBytwo)

console.log(newList2)


const students = ['allan', 'alex', 'betty', 'ronnie']

function capitalise (str) {
  const capitalLetter = str[0].toUpperCase()
  const length = str.length
  const newStr = capitalLetter + str.substring(1, length)
  return newStr
}

const newStudents = students.map(function (student) {
  const newStudent = student.toUpperCase()
  return newStudent
})
console.log(newStudents)

const newCapitalisedStds = students.map(capitalise)

console.log(newCapitalisedStds)

const myNames = ['lukwago', 'allan']
const myNamesCapitalised = myNames.map(capitalise)
console.log(myNamesCapitalised.join('-'))
