import React, { useContext, useEffect } from "react";
import CardContext from "../context/CardContext";

function Card({ item }) {
	const { cardOne, setCardOne, cardTwo, setCardTwo, cardArr } = useContext(CardContext);

	console.log(cardOne, cardTwo);

	useEffect(() => {
		if (cardOne && cardTwo) {
			console.log(cardArr[cardOne - 1].imageNo === cardArr[cardTwo - 1].imageNo);
			if (cardArr[cardOne - 1].imageNo === cardArr[cardTwo - 1].imageNo) {
				console.log("win");
			} else {
				setTimeout(() => {
					setCardOne();
					setCardTwo();
				}, 1000);
			}
		}
	}, [cardOne, cardTwo, cardArr, setCardOne, setCardTwo]);

	const turnCard = (item) => {
		if (!cardOne) {
			setCardOne(item.id);
		} else if (!cardTwo) {
			setCardTwo(item.id);
		}
	};

	return (
		<div onClick={() => turnCard(item)} id={item.id} className={`${item.imageNo} aspect-square relative cursor-pointer c ${cardOne === item.id || cardTwo === item.id ? "active" : ""}`}>
			<div className={`f bg-white font-bold text-8xl transition-all ease-in-out backface-hidden w-full h-full absolute flex items-center justify-center `}>?</div>
			<div className={`b bg-white transition-all ease-in-out backface-hidden rotate-y-180`}>
				<img className="w-full" src={item.image} alt="" />
			</div>
		</div>
	);
}

export default Card;
