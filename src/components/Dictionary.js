import React, { useState } from "react";
import axios from "axios";

import Results from "./Results.js";
import "./Dictionary.css";

// styling see https://sad-khorana-464dcb.netlify.app/ or https://dribbble.com/shots/18197008-React-Dictionary-Web-App

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let apiKey = "tb533a02o404f422da6058f58bb72fcc";
	let [apiResult, setApiResult] = useState(null);

	function search(event) {
		event.preventDefault();

		if (keyword) {
			let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
			axios.get(apiUrl).then(getAPIresult);
		}
	}

	function handleKeyWordChange(event) {
		setKeyword(event.target.value);
	}

	function getAPIresult(response) {
		if (response.status === 200) {
			console.log(response);
			setApiResult(response.data);
		} else {
			console.log(`${response.status}: Response Error`);
		}
	}

	return (
		<div className="Dictionary">
			<div className="box">
				<h1>Word lookup</h1>
				<form onSubmit={search}>
					<div className="d-flex">
						<div className="flex-grow-1">
							<input
								className="form-control"
								type="search"
								autoFocus={true}
								onChange={handleKeyWordChange}
								placeholder="Search"
							/>
						</div>
						<div className="mx-1">
							<button className="btn mx-1 px-3" type="submit" value="Search">
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
			<div>
				<Results data={apiResult} />
			</div>
		</div>
	);
}
