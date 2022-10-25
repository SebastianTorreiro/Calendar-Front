import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Day from '../Day/Day'
import './home.css'
import {getAllDays, filterByMonth } from '../../Actions/'
import right from '../../Assets/right.png'
import left from '../../Assets/left.png'
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

function Home({ getAllDays, filterByMonth, allDays,  }) {

  // const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

 const library = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
 const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre']
 let fecha = new Date()

 const [date, setDate] = useState({})
 const [monthForRenderizar, setMonth] = useState()

 const DivHeader = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 `


  // const now = fecha.toLocaleDateString()

  useEffect(()=>{
    const indexMonth = fecha.getMonth()
    setDate({
      indexMonth: indexMonth,
      month: months[indexMonth],
      dayOfWeek: library[fecha.getDay()],
      dayOfMonth: fecha.getDate(),
      // now: now
    })
    setMonth(indexMonth)
    getAllDays();
  },[])

  let indexForMonth = date.indexMonth

  const moveToRight = () =>{
    console.log('ashe')
    return setMonth(prev => prev + 1)
    }
  
    const moveToLeft = () =>{
      return setMonth(prev => prev - 1)

      }
  let monthForRender = allDays.filter((d)=> {
        return (d.month === months[monthForRenderizar])})

  return (
    <div className='container-home'>
      <DivHeader >
        <img onClick={() => moveToLeft()} src={left} alt="" />
        <h1>{months[monthForRenderizar]}</h1>
        <img onClick={moveToRight} src={right} alt="" />
      </DivHeader>
      <div className='container-days'>
        {monthForRender?.map(d => {
          if(d.numberOfMonth === date.dayOfMonth){
            return (<Day
            key={d.numberOfYear}
            name={d.name}
            numberOfMonth={d.numberOfMonth}
            month={d.month}
            numberOfYear={d. v}
            moment={true}
            id={d.id}
            today={date.dayOfMonth}
            />)
          }
            return (<Day
              key={d.numberOfYear}
              name={d.name}
              numberOfMonth={d.numberOfMonth}
              month={d.month}
              numberOfYear={d.numberOfYear}
              moment={false}
              id={d.id}
              today={date.dayOfMonth}
              />)
          
        })}

      </div>
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

