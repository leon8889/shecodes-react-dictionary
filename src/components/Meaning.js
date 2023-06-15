import React from "react";

import Example from "./Example.js";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
	if (props.data) {
		return (
			<div className="Meaning">
				<h3>{props.data.partOfSpeech}</h3>
				{props.data.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<p className="definition">
								{index + 1}. {meaning.definition}
							</p>
							<Example example={meaning.example} />
							<Synonyms synonyms={meaning.synonyms} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
