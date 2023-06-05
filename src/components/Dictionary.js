import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let apiKey = "tb533a02o404f422da6058f58bb72fcc";

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
		} else {
			console.log(`${response.status}: Response Error`);
		}
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input type="search" autoFocus={true} onChange={handleKeyWordChange} />
				<input type="submit" value="Search" />
			</form>
		</div>
	);
}
