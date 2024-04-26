import { useContext } from "react";

import Card from "./components/Card";
import CardContext from "./context/CardContext";
import { images } from "./images";
import { remixArr } from "./utils/remixArr";
import "./card.css";
import "./App.css";

function App() {
	const { cardArr, setCardArr } = useContext(CardContext);

	if (!cardArr) setCardArr(remixArr(images));

	return (
		<div className="relative bg-bg w-full h-screen flex sm:justify-center">
			<div className="grid grid-cols-4-auto md:grid-cols-5-auto gap-3 lg:aspect-6/5 lg:mt-3 h-90-vh content-center justify-center m-2">
				{cardArr?.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}

export default App;
