import { pokemonApi } from "config/pokemonApi";

export const signUp = (body) => pokemonApi.post("/auth/signup", body);
