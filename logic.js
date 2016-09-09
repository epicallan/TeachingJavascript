// if -- conditioning, while -- looping, for -- looping and conditioning,
// data structures have in built loop functions
// data structures
// numbers , strings(words), lists [1, 2, 3], ['asd', 'wewed'], booleans (true or false), objects

function isBig (input) {
  // if bigger than 5 its big
  if (input > 5) {
    return true
  } else {
    return false
  }
}

function useLogic (isItBig) {
  if (isItBig === true) {
    console.log('its a big value: ' + isItBig)
  } else {
    console.log('its a small value: ' + isItBig)
  }
}

const bool1 = isBig(7)

useLogic(bool1)

// logic operators
// || == or, && == and
// > (is greater), < (is less),  === (is equal)
const age = 12
const name = 'allan'

if (age === 10 || age === 12) {
  console.log('thats the person we want')
} else {
  console.log('get lost')
}

if (age === 10 && name === 'allan') {
  console.log('thats the person we want')
} else {
  console.log('get lost')
}

if (age < 10 && name === 'allan') {
  console.log('thats the person we want')
} else {
  console.log('get lost')
}

let height = 10

if (height < 19) {
  height = 20
}
console.log('hight changed: ' + height)
// methods

const list = [3, 4, 5]
console.log(list)


function isAbigName (name) {
  if (name.length > 5) {
    console.log('is a big name: ' + name)
  } else {
    console.log('is a small name: ' + name)
  }
}
isAbigName('Lukwago')
