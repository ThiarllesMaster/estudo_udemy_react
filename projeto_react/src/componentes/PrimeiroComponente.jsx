//Obrigatório já que é um componente
import React from 'react'

export default  (props) => 
 <h1>Minha função Arrow
     {props.name} <br/>
     {(props.name == 'Rafinha')?'Minha Filha':'Não conheço'}
     {2+5}
 </h1>
