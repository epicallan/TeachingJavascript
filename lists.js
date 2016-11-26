const numbers = [1, 4, 9]

function double(num) {
  return num * 2
}

const doubles = numbers.map(function(num) {
  return num * 3
})

function loopThroughNumbers () {
  const myNewList = []
  for (var i = 0; i < 3; i = i + 1) {
    let newNum = numbers[i]
    if (newNum > 4) {
      newNum = newNum * 3
    }
    myNewList.push(newNum)
  }
  return myNewList
}

const list2 = loopThroughNumbers()
console.log(list2)

// while(i < 3) {
//  const newNum = numbers[i] * 3
//  console.log(newNum)
//  i = i + i
// }
//

const person = {
  name: 'allan lukwago',
  age: 12,
  school: 'muk'
}
console.log(person.name)
console.log(person['name'])
console.log(person.age)

const students = [{
  name: 'allan lukwago',
  age: 12,
  school: 'Kya'
}, {
  name: 'alex lukwago',
  age: 14,
  school: 'muk'
}, {
  name: 'brian lukwago',
  age: 15,
  school: 'muk'
}]
const modifiedStudents = students.map(function(student) {
  if (student.age < 13) {
    student.age = 14
  }
  return student
})
console.log(modifiedStudents)
