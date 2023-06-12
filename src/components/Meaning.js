import React from "react";

import Example from "./Example.js";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
	if (props.meaning) {
		return (
			<div className="Meaning">
				<h3>{props.meaning.partOfSpeech}</h3>
				<p className="definition">{props.meaning.definition}</p>
				<Example example={props.meaning.example} />
				<Synonyms synonyms={props.meaning.synonyms} />
			</div>
		);
	} else {
		return null;
	}
}
