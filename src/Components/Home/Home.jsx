import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Day from '../Day/Day'
import './home.css'
import {getAllDays } from '../../Actions/'


function Home({ getAllDays }) {

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  useEffect(()=>{
    getAllDays();
  },[])


  return (
    <div className='container-days'>
      {days.map(d => {
        return <Day
              number={d}
              />
      })}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allDays: state.allDays
  }
}

export default connect (mapStateToProps, {getAllDays})(Home)