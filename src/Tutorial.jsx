import React from "react"

function Tutorial() {
	return (
		<main id="tutorial">
			<div>
				<sub>How to play</sub>
				<h2>Equals</h2>
			</div>

			<div>
				<h3>Parts</h3>
				<p>
					Equals consists of:
					<br />
					<ul>
						<li>18 red cards of either 1, 2, or 3</li>
						<li>18 blue cards of either 1, 2, or 3</li>
						<li>8 gold cards</li>
					</ul>
					<br />
					Each red card counts against the value of your set, e.g{" "}
					<strong>a Red 1 would be -1</strong>.
					<br />
					Conversely, blue cards count towards your value, so{" "}
					<strong>a Blue 1 would be +1</strong>.
					<br />
					Gold cards don't count, and have a value of{" "}
					<strong>zero</strong>.
				</p>
			</div>

			<div id="dont-know-rummy">
				<sub>
					If you already know how to play Rummy, skip ahead to{" "}
					<a href="#know-rummy">the next section</a>
				</sub>
				<h3>I don't know how to play Rummy</h3>
				<p>
					<ol>
						<li>
							Each person is given 3 or 5 cards depending on the
							number of players
						</li>
						<li>
							<img src="" alt="" />
							The remaining cards are placed into a deck and one
							card is placed on the stack
						</li>
						<li>
							Each player can choose to either take the card on
							the stack, or take a card from the deck.
							<br />
							If they choose to take a card from the deck, they
							have to either add that to their set or lay it out
							on the stack and pass on their turn
						</li>
						<li>
							If the player chooses to take a card, they need to
							add it to their set and choose another card that
							they would like to drop
							<br />
							The card dropped is placed on the stack of cards
						</li>
					</ol>
					If you already know rummy, Equals will be easy to play. In
					Rummy, cards need to be arranged in sets of 3 and 4.
					<br />
					In Equals, you only receive 3 or 5 cards, and you have to
					ensure that they add up to 0
					<br />
					Each card
				</p>
			</div>

			<div id="know-rummy">
				<sub>
					If you don't remember how to play Rummy, read through the{" "}
					<a href="#dont-know-rummy">previous section</a>
				</sub>
			</div>
		</main>
	)
}

export default Tutorial
