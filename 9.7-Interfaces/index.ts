interface Human extends Animal {
  name: string
  age: number
}

interface Animal {
  sex: 'male' | 'female'
}

//type Person = Human & Animal

const person: Human = {
  age: 32,
  name: 'Leandro',
  sex: 'male'
}