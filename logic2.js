
function canHeDrink (age, money) {
  if (age === 18 && money > 3000) {
    return true
  } else {
    return false
  }
}

const drinkable = canHeDrink(19, 2000)

console.log('can he drink', drinkable, 'we have found out')

console.log('can he drink: ' + drinkable)
