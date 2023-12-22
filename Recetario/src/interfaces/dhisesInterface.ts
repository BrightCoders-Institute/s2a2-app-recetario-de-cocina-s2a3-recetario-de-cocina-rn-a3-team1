export interface SimpleDishes {
  id: string,
  name:string,
  picture?: string,
}

export interface FullDishes {
  id: string,
  name:string,
  picture?: string,
  ingredient: Ingredients[]
}

export interface Ingredients {
  one: string,
  two: string,
  three: string,
  four?: string,
  five?: string
}