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

interface ICustomer {
  name: string;
  address: string;
  phone: string;
}

interface IOrderDish {
  dish: IDish;
  amount: number;
}

interface IOrder {
  id: string;
  dishes: IOrderDish[];
}

interface IOrderMutation {
  customer: ICustomer;
  order: IOrder;
}

interface IOrderApi {
  [id: string]: number;
}

interface IOrderApiMutation {
  customer: ICustomer;
  order: IOrderApi;
}

interface IOrdersApiMutation {
  [id: string]: IOrderApiMutation;
}