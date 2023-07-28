import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../../axiosApi";

export const fetchOrders = createAsyncThunk<IOrderMutation[]>(
  'orders/fetchAll',
  async () => {
    const { data: dishes } = await axiosApi.get<IDishesApi>('/dishes.json');
    const { data: orders } = await axiosApi.get<IOrdersApiMutation>('/orders.json');

    if (!orders || !dishes) return [];

    const formattedDishes: IDish[] = Object.keys(dishes).map(id => ({ ...dishes[id], id }));
    const formattedOrders = Object.keys(orders).map(id => orders[id].order);

    const ordersID = formattedOrders.map(order => Object.keys(order));
    const ordersAmounts = formattedOrders.map(order => Object.values(order));

    const result: IOrderMutation[] = [];

    ordersID.forEach((orderID, i) => {
      const orderDishes: IOrderDish[] = [];

      orderID.forEach((id, j) => {
        const orderDish: IDish = formattedDishes.find(dish => dish.id === id)!;
        orderDishes.push({ dish: orderDish, amount: ordersAmounts[i][j] });
      });

      const currentId = Object.keys(orders)[i];

      result.push(
        {
          customer: orders[currentId].customer,
          order: {
            dishes: orderDishes,
            id: currentId
          }
        }
      );
    });

    return result;
  }
);

export const deleteOne = createAsyncThunk<void, string>(
  'orders/deleteOne',
  async (id) => {
    await axiosApi.delete(`/orders/${id}.json`);
  }
);