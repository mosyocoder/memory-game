import React from "react";

function Card({ item }) {
	return <img className="aspect-square" src={item.image} alt="" />;
}

export default Card;
