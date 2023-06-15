import React from "react";
import "./Photos.css";

export default function Photos(props) {
	if (props.data) {
		let data = props.data;
		return (
			<div className="Photos">
				<div className="box">
					<div className="row">
						{data.map(function (photo, index) {
							return (
								<div className="col-4" key={index}>
									<a href={photo.src.original} target="_blank" rel="noreferrer">
										<img
											src={photo.src.landscape}
											alt={photo.alt}
											className="img-fluid"
										/>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
