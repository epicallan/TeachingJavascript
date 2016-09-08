// A function is a collection of commands / instructions on what you to do or accomplish in
// your program/script
// function does work
// function scope, variables with in a function are not
// acccesible outside it
// functions inputs are placeholders for variables / inputs
function sayMyName (myfirstName, myLastName) { // first name and last name are function inputs
  const fullName = myfirstName + ' ' + myLastName
  return fullName // output
}
const name = sayMyName('Allan', 'Lukwago')

console.log(name)

function sayMyAddress () {
  const district = ' Wakiso '
  const town = ' kampala'
  const parish = 'konge'
  const fullAddress = district + ' ' + town + ' ' + parish
  return fullAddress
}

const allanAddress = sayMyAddress()
console.log(allanAddress)

function sum (x, y) {
  const val = x + y
  return val
}

function multplication (x, y) {
  const val = x * y
  return val
}

function division (x, y) {
  const val = x / y
  return val
}

function calculator (x1, y1, x2, y2) {
  const result = sum(x1, y1) + multplication(x2 + y2)
  const value = result + division(8, 10)
  return value
}
const val = calculator(2, 3, 5, 6)

console.log('sum and multplication: ' + val)
