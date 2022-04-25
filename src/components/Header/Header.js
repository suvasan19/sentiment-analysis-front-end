import React from "react";

const Header = (props) => {
	return (
		<div className='container mt-2'>
			<div className='card bg-dark text-light p-5 '>
				<h1>Social Sentiment Score</h1>
				<div className='d-flex flex-row justify-content-center '>
					<img
						className='rounded w-25 pb-2'
						src='https://digest.bps.org.uk/wp-content/uploads/2016/03/14fd5-thinkstockphotos-487387291.jpg'
						alt=''
					/>
				</div>
				<p class='intro'>
					Want to find out how much something is liked or disliked? Enter a keyword, and the
					application will find tweets relevant to the keyword and calculate a sentiment score.
				</p>
			</div>
		</div>
	);
};

export default Header;
