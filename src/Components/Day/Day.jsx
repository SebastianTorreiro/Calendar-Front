import React from 'react'
import './day.css'
import { Link } from 'react-router-dom'
export default function Day({numberOfMonth, moment, today, id}) {



  return (
    <Link 
    // className={` day ${moment ? 'today' : null}  ${today > numberOfMonth ? 'pasado' : today < numberOfMonth ? 'futuro' : null}`}
    to={`/home/${id}`}
    >
    
      <div  className=' border border-gray-200 flex flex-col ' >
        <header className='flex flex-col items-center'>
          <p></p>
          <p className='text-sm p-1 my-1 text-center'> 
          {numberOfMonth}
          </p>
        </header>
      </div>
      </Link>
  )
}
