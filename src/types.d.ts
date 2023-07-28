interface IDish {
  id: string;
  title: string;
  price: string;
  image: string;
}

type TDishApi = Omit<IDish, 'id'>;

interface IDishesApi {
  [id: string]: TDishApi;
}

interface ICartDishes {
  [id: string]: number;
}

interface IOrderDish {
  dish: IDish;
  amount: number;
}

interface IOrder {
  id: string;
  dishes: IOrderDish[];
}

interface IOrderApi {
  [id: string]: number;
}

interface IOrdersApi {
  [id: string]: IOrderApi;
}