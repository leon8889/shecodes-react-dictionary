import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
	if (props.synonyms) {
		return (
			<div className="Synonyms">
				<ul className="inline-list">
					<li className="inline-list-item inline-list-item-first">Synonyms:</li>
					{props.synonyms.map(function (synonym, index) {
						return (
							<li className="inline-list-item" key={index}>
								{synonym}
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
}
