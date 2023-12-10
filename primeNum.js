function primeNum(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}
let checkPrime = 17
if (primeNum(checkPrime)) {
  console.log(`${checkPrime} is a prime number`)
} else {
  console.log(`${checkPrime} is not a prime number`)
}
