import React, { useState } from "react";
import Sentiment from "../Sentiment/Sentiment";

const Tweets = () => {
	let [responseObj, setResponseObj] = useState({});
	let [keyword, setKeyword] = useState("");

	// const uriEncodedKeyword = encodeURIComponent(keyword);

	function getTweets() {
		fetch("/" + keyword)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setResponseObj(response);
				console.log(responseObj);
				console.log("resp: ", response);
			})
			.catch((err) => {
				console.log("ERROR");
				console.log(err);
				console.error(err.message);
				setResponseObj({ error: true });
				console.log(responseObj.error);
			})
			.then(() => {
				console.log("Done");
			});
	}
	return (
		<div>
			<h5>Get Sentiment Score</h5>
			<input
				className='form-control'
				type='text'
				placeholder='Enter Keyword'
				maxLength='50'
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<button onClick={getTweets} className='btn btn-warning mt-2'>
				Get Social Sentiment Score
			</button>
			<Sentiment responseObj={responseObj} />
		</div>
	);
};
export default Tweets;
