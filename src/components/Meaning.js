import React from "react";

import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
	if (props.meaning) {
		return (
			<div className="Meaning">
				<h3>{props.meaning.partOfSpeech}</h3>
				<p className="definition">{props.meaning.definition}</p>
				<p className="example">{props.meaning.example}</p>
				<Synonyms synonyms={props.meaning.synonyms} />
			</div>
		);
	} else {
		return null;
	}
}
