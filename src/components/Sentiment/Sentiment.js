import React from "react";
import Count from "../Count/Count";

const Sentiment = (props) => {
	return (
		<div>
			<p>{props.responseObj.keys}</p>
			{props.responseObj.hasOwnProperty("count") ? (
				<>
					<Count count={props.responseObj.count} />
					<div className='d-flex row'>
						<div className='col-6'>
							<div className='bg-info'>
								{props.responseObj.positive.map(function (tweet) {
									return (
										<div className='bg-success text-light rounded'>
											<h4>{tweet}</h4>
										</div>
									);
								})}
							</div>
						</div>
						<div className='col-6'>
							<div className='bg-info'>
								{props.responseObj.negative.map(function (tweet) {
									return (
										<div className='bg-danger text-light rounded'>
											<h4>{tweet}</h4>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</>
			) : null}
		</div>
	);
};

export default Sentiment;
