import { useContext, useEffect } from "react";

import Card from "./components/Card";
import CardContext from "./context/CardContext";
import { images } from "./images";
import { remixArr } from "./utils/remixArr";
import "./card.css";
import "./App.css";

function App() {
	const { cardArr, setCardArr, score, setScore } = useContext(CardContext);

	useEffect(() => {
		if (!cardArr) setCardArr(remixArr(images));
	}, [cardArr, setCardArr]);

	const unmatchedCount = cardArr?.filter((card) => !card.matched).length;

	const restartGame = () => {
		setCardArr(remixArr(images)); // Kartları karıştır
		setScore(0); // Skoru sıfırla
	};

	if (unmatchedCount === 0) {
		return (
			<div className="flex flex-col items-center justify-center w-full h-screen">
				<p className="text-2xl sm:text-5xl">
					Oyun bitti scorunuz: <span className=" text-3xl sm:text-6xl underline">{score}</span>
				</p>
				<button onClick={restartGame} className="w-72 h-10 sm:h-28 mt-20 text-xl sm:text-4xl bg-slate-300 hover:border-2 hover:border-slate-400 rounded-md">
					Tekrar Oyna
				</button>
			</div>
		);
	}

	return (
		<div className="relative bg-bg w-full h-screen flex sm:justify-center">
			<div className="absolute w-48 top-8 left-1/4 sm:left-20 flex justify-center bg-slate-400 items-center sm:h-28 flex-col">
				<h1 className="font-bold text-xl">SCORE</h1>
				<p className="font-semibold text-lg">{score}</p>
			</div>
			<div className="grid grid-cols-4-auto md:grid-cols-5-auto gap-3 lg:aspect-6/5 lg:mt-3 h-90-vh content-center justify-center m-2">
				{cardArr?.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}

export default App;
