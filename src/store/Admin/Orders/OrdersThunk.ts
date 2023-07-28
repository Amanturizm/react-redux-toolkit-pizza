import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../../axiosApi";

export const fetchOrders = createAsyncThunk<IOrder[]>(
  'orders/fetchAll',
  async () => {
    const { data: dishes } = await axiosApi.get<IDishesApi>('/dishes.json');
    const { data: orders } = await axiosApi.get<IOrdersApi>('/orders.json');

    if (!orders) return [];

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

export const deleteOne = createAsyncThunk<void, string>(
  'orders/deleteOne',
  async (id) => {
    await axiosApi.delete(`/orders/${id}.json`);
  }
);