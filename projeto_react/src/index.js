import ReactDOM from 'react-dom'
import React from 'react'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB} from './componentes/DoisComponentes'

const element = document.querySelector("#root")

ReactDOM.render(
    <div>
        <CompA name ="Primeiro Componente"/>
        <CompB name = "Segundo Componente"/>
    </div>
    , element)