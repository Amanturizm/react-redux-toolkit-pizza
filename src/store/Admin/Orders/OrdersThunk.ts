import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../../axiosApi";

export const fetchOrders = createAsyncThunk<IOrder[]>(
  'orders/fetchAll',
  async () => {
    const { data: dishes } = await axiosApi.get<IDishesApi>('/dishes.json');
    const { data: orders } = await axiosApi.get<IOrdersApi>('/orders.json');

    const formattedDishes: IDish[] = Object.keys(dishes).map(id => ({ ...dishes[id], id }));
    const formattedOrders = Object.keys(orders).map(id => orders[id]);

    const ordersID = formattedOrders.map(order => Object.keys(order));
    const ordersAmounts = formattedOrders.map(order => Object.values(order));

    const result: IOrder[] = [];

    ordersID.forEach((orderID, i) => {
      const orderDishes: IOrderDish[] = [];

      orderID.forEach((id, j) => {
        const orderDish: IDish = formattedDishes.find(dish => dish.id === id)!;
        orderDishes.push({ dish: orderDish, amount: ordersAmounts[i][j] });
      });

      result.push({ dishes: orderDishes, id: Object.keys(orders)[i] });
    });

    return result;
  }
);






















// const formattedDishes: TOrder[] = Object.keys(dishes)
//   .map(id => ({ title: dishes[id].title, price: dishes[id].price, id }));
//
// const ordersID = Object.keys(orders)
//   .map(id => ({ ...orders[id] }))
//   .map(order => Object.keys(order));
//
// const ordersAmounts = Object.keys(orders)
//   .map(id => (Object.values(orders[id])));
//
// console.log('ordersAmounts: ', ordersAmounts);
// console.log('ordersID: ', ordersID);
//
// const formattedOrders: any = [];
//
// ordersID.forEach((order, index) => {
//   const lol: any = [];
//
//   formattedDishes.forEach((dish, index2) => {
//     if (order.includes(dish.id)) {
//       lol.push({ dish, amount: ordersAmounts[index][index2] });
//     }
//   });
//
//   formattedOrders.push(lol);
// });
//
// console.log('formattedOrders: ', formattedOrders);