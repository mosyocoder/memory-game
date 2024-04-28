import React, { useContext, useEffect } from "react";
import CardContext from "../context/CardContext";

function Card({ item }) {
	const { cardOne, setCardOne, cardTwo, setCardTwo, cardArr, setCardArr, score, setScore } = useContext(CardContext);

	useEffect(() => {
		if (cardOne !== undefined && cardTwo !== undefined) {
			let card1;
			let card2;

			cardArr.forEach((card) => {
				if (card.id === cardOne) card1 = card.imageNo;
				if (card.id === cardTwo) card2 = card.imageNo;
			});

			if (card1 === card2) {
				const updatedArr = cardArr.map((card) => {
					if (card.id === cardOne || card.id === cardTwo) {
						return { ...card, matched: true };
					}
					return card;
				});
				setCardArr(updatedArr);
				setScore(score + 50);
				setCardOne();
				setCardTwo();
			} else {
				setScore(score - 10);
				setTimeout(() => {
					setCardOne();
					setCardTwo();
				}, 1000);
			}
		}
	}, [cardOne, cardTwo, cardArr, setCardOne, setCardTwo, setCardArr, setScore]);

	const turnCard = (item) => {
		if (cardOne === undefined) {
			setCardOne(item.id);
		} else if (cardTwo === undefined) {
			setCardTwo(item.id);
		}
	};

	return (
		<div onClick={() => turnCard(item)} id={item.id} className={`${item.imageNo} ${item.matched ? "matched" : ""} aspect-square relative cursor-pointer c ${cardOne === item.id || cardTwo === item.id ? "active" : ""}`}>
			<div className={`f bg-white font-semibold text-3xl sm:font-bold sm:text-8xl transition-all ease-in-out backface-hidden w-full h-full absolute flex items-center justify-center `}>?</div>
			<div className={`b bg-white transition-all ease-in-out backface-hidden rotate-y-180`}>
				<img className="w-full" src={item.image} alt="" />
			</div>
		</div>
	);
}

export default Card;
