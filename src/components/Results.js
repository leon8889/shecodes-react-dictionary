import React from "react";

import Meaning from "./Meaning.js";

export default function Results(props) {
	if (props.data) {
		console.log(props.data);
		return (
			<div className="Results">
				<div className="box">
					<h2>{props.data.word}</h2>
					<p>/{props.data.phonetic}/</p>
				</div>
				<div className="box">
					{props.data.meanings.map(function (meaning, index) {
						return <Meaning meaning={meaning} key={index} />;
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}
