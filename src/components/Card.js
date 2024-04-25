import React, { useState } from "react";

function Card({ item }) {
	const [cardOne, setCardOne] = useState();
	const [cardTwo, setCardTwo] = useState();

	const turnCard = (id) => {
		console.log("cardone = ", cardOne);
		console.log("cardtwo = ", cardTwo);
		if (!cardOne) {
			setCardOne(id);
		}
		if (cardOne && !cardTwo) {
			setCardTwo(id);
		}
	};

	return (
		<div onClick={() => turnCard(item.id)} id={item.id} className={`aspect-square relative cursor-pointer c ${cardOne === item.id || cardTwo === item.id ? "active" : ""}`}>
			<div className={`f bg-white font-bold text-8xl transition-all ease-in-out backface-hidden w-full h-full absolute flex items-center justify-center `}>?</div>
			<div className={`b bg-white transition-all ease-in-out backface-hidden rotate-y-180`}>
				<img className="w-full" src={item.image} alt="" />
			</div>
		</div>
	);
}

export default Card;
