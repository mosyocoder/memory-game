import Card from "./components/Card";
import { images } from "./images";
import { remixArr } from "./utils/remixArr";

import "./card.css";
import "./App.css";

function App() {
	const arr = remixArr(images);

	console.log(arr);

	return (
		<div className="relative bg-bg w-full h-screen flex sm:justify-center">
			<div className="grid grid-cols-4-auto md:grid-cols-5-auto gap-3 lg:aspect-6/5 lg:mt-3 h-90-vh content-center justify-center m-2">
				{arr.map((item) => (
					<div className="">
						<div className="f"></div>
						<div className="b">
							<img className="w-full" src={item.image} alt="" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
