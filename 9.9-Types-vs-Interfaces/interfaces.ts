type Sex = 'male' | 'female'

type Animal = {
  sex: Sex
  hungry: boolean
  age: number
}

interface Mammal extends Animal {
  weaned: boolean
}

type Person = Mammal & {
  name: string
}

const animal: Person = {
  hungry: false,
  weaned: true,
  sex: 'male',
  age: 6,
  name: 'Leandro'
}