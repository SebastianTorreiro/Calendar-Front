import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDayById } from '../../Actions/';
import axios from 'axios';
const API = process.env.REACT_APP_API



const DayDetail = ({ getDayById, dayDetail }) => {

	// que se vea el textarea cuando no haya un resume [v]
	// cuando haya un resume, que se vea abajo escrito y se desabilite el text area []
	// cuando este desabilitado el text area, el nombre del boton sera edit y no send o write []
	// que cuando se toque el boton edit se cargue el texto en el text area para ser editado []
	// y que continue con su funcionamiento normal. []
	// solucionar el send cuando el estado esta vacio [parcialmente]

	const { id } = useParams()

	const [resume, setResume] = useState('');

	const setingResume = (e) => {
		setResume(e.target.value)

	}


	const sendResume = async () => {
		if(resume){
			const updated = await axios.put(API + '/days/resume', { resume, idDay: dayDetail.id })
			console.log(updated)
			setResume('') 
		}
	}

	useEffect(() => {
		getDayById(id);

	}, [])

  
	return (
		<div className='container'>

			<div className="day-resume-container">

				<textarea
					value={resume}
					onChange={setingResume}
					name="resume"
					id=""
					cols="30"
					rows="10"></textarea>

				<button onClick={sendResume}>Write</button>

			</div>

			{dayDetail.resume && dayDetail.resume}


			<p>{dayDetail.name}</p>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		dayDetail: state.dayDetail
	}
}

export default connect(mapStateToProps, { getDayById })(DayDetail);
