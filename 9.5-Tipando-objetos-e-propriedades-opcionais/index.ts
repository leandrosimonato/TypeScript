type Person = {
  name: string
  age: number
  contacts?: string[]
  isAlive: boolean
}

const person: Person = {
  age: 32,
  name: 'leandro',
  isAlive: true,
  contacts: [
    'leandro.leandrosimonato@gmail.com'
  ]
}

const person2: Person = {
  age: 35,
  name: 'Carol',
  isAlive: true,
  contacts: [
    'Carol.carolsimonato@gmail.com'
  ]
}