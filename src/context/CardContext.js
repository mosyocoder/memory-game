import { createContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
	const [cardOne, setCardOne] = useState();
	const [cardTwo, setCardTwo] = useState();
	const [cardArr, setCardArr] = useState();
    const [score, setScore] = useState(0);

    const value = {
		cardOne,
		setCardOne,
		cardTwo,
		setCardTwo,
		cardArr,
		setCardArr,
		score,
		setScore,
    };

	return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export default CardContext;
