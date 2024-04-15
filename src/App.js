import { images } from "./images";

const remixArr = (arr) => {
	const duplicatedArr = arr.flatMap((item) => [item, item]);

	const shuffledArr = duplicatedArr.sort(() => Math.random() - 0.5);

	return shuffledArr;
};

function App() {
	const arr = remixArr(images);

	return (
		<div className="bg-bg h-screen grid grid-cols-4">
			{arr.map((item) => (
				<div className="w-44 h-44 rounded-xl bg-white flex items-center justify-center">
					<img className="w-40 h-40 rounded-md" src={item.image} alt="" />
				</div>
			))}
		</div>
	);
}

export default App;
