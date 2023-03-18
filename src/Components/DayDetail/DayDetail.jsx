import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDayById } from '../../Actions/';
import axios from 'axios';
const API = process.env.REACT_APP_API



const DayDetail = ({getDayById, dayDetail}) => {

	const { id } = useParams()

	const [resume, setResume] = useState('');

	const setingResume = (e) =>{
		setResume(e.target.value)

	}


	const sendResume = async () =>{
		const updated = await axios.put(API + '/days/resume',{resume, idDay: dayDetail.id})
		console.log(updated)
		setResume('')
	}

	useEffect(()=>{
		getDayById(id);
		
	},[])


	return (
	<div className='container'>

		<div className="day-resume-container">

		<textarea onChange={setingResume} name="resume" id="" cols="30" rows="10"></textarea>
		<button onClick={sendResume}>Send</button>

		</div>

		{dayDetail.resume ? dayDetail.resume : null}


		<p>{dayDetail.name}</p>
	</div>  
)};

const mapStateToProps = (state) =>{
	return {
		dayDetail: state.dayDetail
	}
}

export default connect (mapStateToProps,{ getDayById })(DayDetail);
