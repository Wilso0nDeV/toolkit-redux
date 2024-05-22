import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks";



export const PokemonApp = () => {





  const dispatch =  useDispatch();
  const { page, pokemons, isLoading} = useSelector((state)=> state.pokemons)

  const getNextPokemon = () => {
    dispatch(getPokemons(page));
  }

  useEffect(()=>{ 
    dispatch(getPokemons());
  },[])
  
  return (
    <>  
        <h1>PokemonApp</h1>
        <hr />
        {isLoading && <span>Cargando ... </span> }

        {!isLoading && (
            <ul>
            {pokemons.map(pokemon=>(
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        ) }
        <button 
          onClick={()=>getNextPokemon()}
        >
          Next
        </button>
        </>
  )
}
