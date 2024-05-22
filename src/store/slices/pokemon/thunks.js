import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from './../../../api/pokemonApi';



export const getPokemons = ( page = 0) =>{
    return async (dispatch,getState) => {
        dispatch(startLoadingPokemons());
        // //TODO : realizar petición HTTP
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`)
        // const data = await resp.json();
        // console.log(data)

        const resp = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`)
        const { data } = resp
        dispatch(setPokemons({
            pokemons : data.results, page: page + 1 
        }))
    }
}