import React from 'react'
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <div className='start'>
        <h1>Bienvenido a Calendar App</h1>
        <p>Calendar app es una aplicacion para ayudarte a planificar tus dias/meses, anotando tus objetivos, las cosas que pasaron y muchas cosas mas. </p>
        <Link to={'/home'}>
          <button>Ir al calendario</button>
        </Link>
        
        
    </div>
  )
}
