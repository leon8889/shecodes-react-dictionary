import React from "react";

export default function Meaning(props) {
	if (props.meaning) {
		return (
			<div className="Meaning">
				<h3>{props.meaning.partOfSpeech}</h3>
				<p className="definition">{props.meaning.definition}</p>
				<p className="example">{props.meaning.example}</p>
			</div>
		);
	} else {
		return null;
	}
}
