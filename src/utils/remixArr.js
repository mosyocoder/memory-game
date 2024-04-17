export const remixArr = (arr) => {
	const duplicatedArr = arr.flatMap((item, index) => [
		{ id: index, ...item },
		{ id: index + arr.length, ...item },
	]);

	const shuffledArr = duplicatedArr.sort(() => Math.random() - 0.5);

	return shuffledArr;
};
