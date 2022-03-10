import React, { useState } from "react"

function Card({ caption, value, onClick, disabled, deck, disableStack }) {
	const [showDeck, setShowDeck] = useState(deck)

	if (!value) return null

	let colour = "Unknown"

	switch (value[0]) {
		case 0:
			colour = "Gold"
			break
		case -1:
			colour = "Red"
			break
		case +1:
			colour = "Blue"
			break
	}

	return (
		<button
			className={
				"card " +
				(showDeck ? " nocolour " : colour.toLowerCase()) +
				(disabled ? " disabled" : " ") +
				(deck ? " deck " : " ")
			}
			onClick={showDeck ? () => {} : onClick}
			disabled={disabled}
		>
			<strong>{caption}</strong>
			{showDeck ? (
				<div
					onClick={() => {
						setShowDeck(false)
						disableStack()
					}}
				>
					<h2>Tap to view</h2>
					<p>
						You won't be able to take the card placed on the stack
						if you view this!
					</p>
				</div>
			) : (
				<>
					<h1>{value[1]}</h1>
					<h3>{colour}</h3>
				</>
			)}
		</button>
	)
}

export default Card
