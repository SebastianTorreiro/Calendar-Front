import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getDayById } from '../../Actions/';
import axios from 'axios';
const API = process.env.REACT_APP_API



const DayDetail = ({ getDayById, dayDetail }) => {


	useEffect(() => {
		getDayById(id);
	}, [])

	// que se vea el textarea cuando no haya un resume [v]
	// cuando haya un resume, que se vea abajo escrito y se desabilite el text area [v]
	// cuando este desabilitado el text area, el nombre del boton sera edit y no send o write [v]
	// que cuando se toque el boton edit se cargue el texto en el text area para ser editado [v]
	// y que continue con su funcionamiento normal. [v]
	// solucionar el send cuando el estado esta vacio [parcialmente]

	const { id } = useParams()

	const [resume, setResume] = useState('');
	const [boleean, setBoleaan] = useState(true);

	const setingResume = (e) => {
		setResume(e.target.value)

	}

	let history = useNavigate()
	const returnHome = () => {
		history(-1)

	}

	const editResume = (e) => {
		setResume(dayDetail.resume)
		setBoleaan(false)
	}


	const sendResume = async () => {
		if (resume) {
			const updated = await axios.put(API + '/days/resume', { resume, idDay: dayDetail.id })
			console.log(updated)
			setResume('')
		}
	}





	return (
		<div className='container'>

			{dayDetail.resume && boleean ?
				<div className="container-white-resume">
					<div className="detail-resume">
						{dayDetail.resume}
					</div>
					<div className="button-edit-resume" onClick={editResume}>
						Edit
					</div>
				</div>
				:
				<div className="day-resume-container">

					<textarea
						value={resume}
						onChange={setingResume}
						name="resume"
						id=""
						cols="30"
						rows="10"></textarea>

					<button onClick={sendResume}>Write</button>

				</div>}


			<div className='button-back'>
				<button onClick={returnHome}>
					Volver
				</button>
			</div>


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
