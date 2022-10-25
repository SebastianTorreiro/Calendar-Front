import React from 'react'
import './day.css'
import { Link } from 'react-router-dom'
export default function Day({numberOfMonth, moment, today, id}) {



  return (
    <Link 
    className={` day ${moment ? 'today' : null}  ${today > numberOfMonth ? 'pasado' : today < numberOfMonth ? 'futuro' : null}`}
    to={`/home/${id}`}
    >
      <div >
        {numberOfMonth}
      </div>
      </Link>
  )
}
