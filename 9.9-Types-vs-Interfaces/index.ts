interface Greet {
  (name: string): string
}

type GreetMethod = (name: string) => string

const greet = (name: string) => 'Hello ' + name