import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter'

export const  App = () => {

  //!Selector :
  //*Es un hook de react-redux que nos ayuda a tomar algo del state
  const {counter} = useSelector((state) => state.counter)
  //!Dispatch : 
  //*Es un hook de react-redux que nos sirve para despachar acciones
  const dispatch = useDispatch() 

  return (
    <>
      <div>
      
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>{counter}</h2>
        <button onClick={() => dispatch(increment())}>
          Incrementar
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrementar
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Incrementar de 2
        </button>
       
      </div>
     
    </>
  )
}

