export interface SimpleDishes {
  id: string,
  name:string,
  picture?: any,
}

export interface FullDishes {
  id: string,
  name: string,
  picture: any,
  ingredients: [] | any;
  portions: [] | any;
}

// export interface Ingredients {
//   one: string,
//   two: string,
//   three: string,
//   four?: string,
//   five?: string
// }