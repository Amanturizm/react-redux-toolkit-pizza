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

interface ICartDish {
  [id: string]: number;
}

// interface ICartDish {
//   dish: IDish;
//   amount: number;
// }