import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'

//!Store
//*Fuente única de la verdad 
//*Aqui es donde se encuentra la información que mis componentes van a consumir
export const store = configureStore({
    //!Reducer : es una combinación de todos los reducer que va a tener mi aplicación
    //*Como dice la teoría, nuestros Reducers estaran dentro de nuestro Store
    reducer: {
        counter: counterSlice.reducer, //*Reducer de Countador
        pokemons: pokemonSlice.reducer
      },
})