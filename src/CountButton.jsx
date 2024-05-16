import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import React from "react";

const CountButton = ({ type, setCount, locked }) => {
	const handleClick = (e) => {
		if (type === "minus") {
			setCount((prev) => {
				const newCount = prev - 1;
				if (newCount < 0) {
					return 0;
				}
				return newCount;
			});
		} else {
			setCount((prev) => {
				const newCount = prev + 1;
				if (newCount > 10) {
					return 10;
				}

				return newCount;
			});
		}
    e.currentTarget.blur();
	};
	return (
		<button disabled={locked}
			onClick={handleClick}
			className='count-btn'
		>
			{type === "minus" && <MinusIcon className='count-btn-icon' />}
			{type === "plus" && <PlusIcon className='count-btn-icon' />}
		</button>
	);
};

export default CountButton;
