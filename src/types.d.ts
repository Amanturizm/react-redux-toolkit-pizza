interface IDish {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface IDishesApi {
  [id: string]: IDish;
}