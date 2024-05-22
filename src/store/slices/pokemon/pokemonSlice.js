import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state,/* action */)=>{
      //*Aparentemente pareciera que estamos mutando el estado, pero no es asi.
      //*Immer:  es una librería que usa redux toolkit para producir una versióm innmutable del estado.
      state.isLoading = true  
    },
    setPokemons : (state, action) => {
      state.isLoading = false 
      state.page = action.payload.page 
      state.pokemons = action.payload.pokemons
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons} = pokemonSlice.actions;
