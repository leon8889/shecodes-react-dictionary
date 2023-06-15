import React, { useState } from "react";
import axios from "axios";

import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

// styling see https://sad-khorana-464dcb.netlify.app/ or https://dribbble.com/shots/18197008-React-Dictionary-Web-App

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let sheCodesAPIkey = "tb533a02o404f422da6058f58bb72fcc";
	let pexelsAPIkey = "5MrOjn6FXggDuS31QwVOWlXudPMCSvyJFm2AIrdh1xLDMCZT59QVVPkW";
	let [sheCodesAPIresult, setSheCodesAPIresult] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [pexelsAPIresult, setPexelsAPIresult] = useState(null);

	function search() {
		if (keyword) {
			// SheCodes Dictionary API call
			let sheCodesAPIurl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${sheCodesAPIkey}`;
			axios.get(sheCodesAPIurl).then(handleDictionaryResponse);

			// Pexels picture API call
			let pexelsAPIurl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
			let header = {
				Authorization: `${pexelsAPIkey}`,
			};
			axios.get(pexelsAPIurl, { headers: header }).then(handleImageResponse);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();

		search();
	}

	function handleKeyWordChange(event) {
		setKeyword(event.target.value);
	}

	function handleDictionaryResponse(response) {
		if (response.status === 200) {
			setSheCodesAPIresult(response.data);
		} else {
			console.log(`${response.status}: Response Error`);
		}
	}

	function handleImageResponse(response) {
		// console.log(response);
		if (response.status === 200) {
			setPexelsAPIresult(response.data.photos);
		} else {
			console.log(`${response.status}: Response Error`);
		}
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<div className="box">
					<h1>What word do you want to look up?</h1>
					<form onSubmit={handleSubmit}>
						<div className="d-flex">
							<div className="flex-grow-1">
								<input
									className="form-control"
									type="search"
									autoFocus={true}
									onChange={handleKeyWordChange}
									defaultValue={props.defaultKeyword}
								/>
							</div>
							<div className="mx-1">
								<button className="btn mx-1 px-3" type="submit" value="Search">
									Search
								</button>
							</div>
						</div>
					</form>
					<div className="hint">
						suggested words: sunset, wine, yoga, forest, ...
					</div>
				</div>
				<div>
					<Results data={sheCodesAPIresult} />
					<Photos data={pexelsAPIresult} />
				</div>
			</div>
		);
	} else {
		setLoaded(true);
		search();
	}
}
