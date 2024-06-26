import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
// import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { PokemonApp } from './PokemonApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    <PokemonApp />
  </Provider>,
  </React.StrictMode>,
)
