import React, { useEffect, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

const Card = () => {
	const [count, setCount] = useState(0);
	const locked = count === 5 ? true : false;

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.code === "Space") {
				const newCount = count + 1;
				if (newCount > 5) {
					setCount(5);
					return;
				}
				setCount(newCount);
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		//clean up function, to remove the keydown event listener
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [count]);

	return (
		<section className={`card ${locked ? "card--limit" : ""}`}>
			<Title locked={locked} />
			<Count count={count} />
			<ResetButton setCount={setCount} />
			<ButtonContainer>
				<CountButton
					type='minus'
					locked={locked}
					setCount={setCount}
				/>
				<CountButton
					type='plus'
					locked={locked}
					setCount={setCount}
				/>
			</ButtonContainer>
		</section>
	);
};

export default Card;
