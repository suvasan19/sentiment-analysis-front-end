import React from "react";
import "./App.css";
import Tweets from "./components/Tweets/Tweets";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Tweets />
			</main>
		</div>
	);
}

export default App;
