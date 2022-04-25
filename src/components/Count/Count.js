import React from "react";

const Count = (props) => {
	return (
		<div className='d-flex flex-row justify-content-around m-2'>
			<div className='p-2 bg-success rounded'>
				<span className='h1 text-white'>{props.count[0]} Positive Tweets</span>
			</div>
			<div className='p-2 bg-danger rounded'>
				<span className='h1 text-white'>{props.count[1]} Negative Tweets</span>
			</div>
		</div>
	);
};

export default Count;
