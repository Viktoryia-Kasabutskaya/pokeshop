import { pokemonApi } from "config/pokemonApi";

class CartService {
  static instance = new CartService();

  #baseUrl = "/cart";

  getItems() {
    return pokemonApi.get(this.#baseUrl);
  }

  addItem(item) {
    return pokemonApi.post(`${this.#baseUrl}/item`, item);
  }

  updateItem({ id, quantity }) {
    return pokemonApi.patch(`${this.#baseUrl}/item`, { id, quantity });
  }

  deleteItem(id) {
    return pokemonApi.delete(`${this.#baseUrl}/item/${id}`);
  }
}

export default CartService.instance;
