import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDayById } from '../../Actions/';

const DayDetail = ({getDayById, dayDetail}) => {

	const { id } = useParams()


	useEffect(()=>{
		getDayById(id);
		
	},[])
	console.log(dayDetail)


	return (
	<div className='container'>
		<p>{dayDetail.name}</p>
	</div>  
)};

const mapStateToProps = (state) =>{
	return {
		dayDetail: state.dayDetail
	}
}

export default connect (mapStateToProps,{ getDayById })(DayDetail);
