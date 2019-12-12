import React from 'react'

const CompA = (props) => 
<h1>O primeiro diz: {props.name}</h1>

const CompB = props => 
<h2>O segundo componente diz {props.name}</h2>

export {CompA, CompB}