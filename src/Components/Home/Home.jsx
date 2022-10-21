import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Day from '../Day/Day'
import './home.css'
import {getAllDays, filterByMonth } from '../../Actions/'


function Home({ getAllDays, filterByMonth, allDays, month }) {

  // const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  const library = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre']
  let fecha = new Date()

  const [date, setDate] = useState({})

 


  // useEffect(()=>{
  //   setDate({
  //     month: months[fecha.getMonth()],
  //     dayOfWeek: library[fecha.getDay()]
  //   })

  // },[])

  useEffect(()=>{
    setDate({
      month: months[fecha.getMonth()],
      dayOfWeek: library[fecha.getDay()],
      dayOfMonth: fecha.getDate()
    })


    getAllDays();
    filterByMonth(date.month)
  },[])

  return (
    <div className='container-days'>
      {month?.map(d => {
        if(d.numberOfMonth === date.dayOfMonth){
          return (<Day
          name={d.name}
          numberOfMonth={d.numberOfMonth}
          month={d.month}
          numberOfYear={d.numberOfYear}
          moment={true}
          id={d.id}
          today={date.dayOfMonth}
          />)
        }else{
          return (<Day
            name={d.name}
            numberOfMonth={d.numberOfMonth}
            month={d.month}
            numberOfYear={d.numberOfYear}
            moment={false}
            id={d.id}
            today={date.dayOfMonth}
            />)
        }
      })}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allDays: state.allDays,
    month: state.filterByMount,

  }
}

export default connect (mapStateToProps, {getAllDays, filterByMonth})(Home)