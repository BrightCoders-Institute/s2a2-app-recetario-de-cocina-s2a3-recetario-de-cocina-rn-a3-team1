export interface SimpleDishes {
  id: string,
  name:string,
  picture?: any,
}

export interface FullDishes {
  id: string,
  name: string,
  picture: any,
  ingredients: [] ;
  portions: [] | any;
}
