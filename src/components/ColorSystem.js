import React, { useState, useRef } from "react";

function ColorSystem() {
	const [inputVals, setInputVals] = useState({
		textInputVal: "",
		colorInputVal: "#fff",
		color: "",
	});

	const { color, textInputVal, colorInputVal } = inputVals;

	const textInput = useRef();

	const pickColor = (e) => {
		const { name, value } = e.target;

		// just override the object
		setInputVals({
			...inputVals,
			color: value,
			[name]: value,
		});

		textInput.current.focus();
	};

	const handleKey = (e) => {
		if (e.key === "Enter") pickColor(e);
	};

	return (
		<div>
			<div>Picked Color : {inputVals.color}</div>

			<input
				type="text"
				name="textInputVal"
				placeholder="Hexadecimal, rgba values, whatever representing a specific color for web."
				onKeyPress={handleKey}
				ref={textInput}
			/>

			<input
				type="color"
				name="colorInputVal"
				onChange={pickColor}
				value={inputVals.color}
			/>
		</div>
	);
}

export default ColorSystem;
