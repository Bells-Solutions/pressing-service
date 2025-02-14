import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore("order", {
  state: () => ({
    orders: [] as any[],
  }),
  actions: {
    async fetchOrders() {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        this.orders = response.data;
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    async createOrder(service: string) {
      try {
        const response = await axios.post("http://localhost:3000/orders", {
          service,
        });
        this.orders.push(response.data);
      } catch (error) {
        console.error("Error creating order:", error);
      }
    },
  },
});
