import { pokemonApi } from "config/pokemonApi";

class OrderService {
  static instance = new OrderService();

  #baseUrl = "/order";

  getOrders() {
    return pokemonApi.get(this.#baseUrl);
  }

  addOrder({ customerId, totalPrice, itemsList }) {
    return pokemonApi.post(this.#baseUrl, {
      customerId,
      totalPrice,
      itemsList,
    });
  }
}

export default OrderService.instance;
