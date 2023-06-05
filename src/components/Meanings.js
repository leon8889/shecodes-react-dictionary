import React from "react";

export default function Meanings(props) {
	if (props.data) {
		return (
			<div className="Meanings">
				{props.data.meanings.map(function (meaning, index) {
					return <div> {meaning.definition} </div>;
				})}
			</div>
		);
	} else {
		return null;
	}
}
