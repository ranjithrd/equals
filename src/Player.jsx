import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "./Card"
import { deleteGame } from "./firebase"

function Player({ state, player, engine, code }) {
	const [chooseCard, setChooseCard] = useState(false)
	const [waiting, setWaiting] = useState("none")
	const [disabledStack, setDisabledStack] = useState(false)

	console.log(player)
	console.log(state)

	const [playerData, setPlayerData] = useState(state.DATA.CARDS_STATE[player])
	const [playerMode, setPlayerMode] = useState(state.DATA.MODES[player])
	const [output, setOutput] = useState(state.output(player))

	console.log(playerData)
	console.log(playerMode)
	console.log(output)

	useEffect(() => {
		setPlayerData(state.DATA.CARDS_STATE[player])
		setPlayerMode(state.DATA.MODES[player])
		setOutput(state.output(player))
	}, [state, player])

	let content = null
	let descriptor = null

	let disableCards =
		playerMode === "out" ||
		playerMode === "spectate" ||
		playerMode === "end" ||
		playerMode === "score"

	let hideAllCards = false

	switch (output[0]) {
		case "not_turn_prompt":
			content = (
				<div className="player">
					<h2>Not your turn yet.</h2>
				</div>
			)
			break
		case "start_prompt":
			descriptor = <p>Start the game!</p>
		case "start_prompt":
		case "round_prompt":
			content = (
				<>
					<div className="spacer"></div>
					<div className="choice">
						{disabledStack ? (
							<button
								className="round"
								onClick={() => {
									interact(player, "pass")
									setWaiting("none")
									setChooseCard(false)
									setDisabledStack(false)
								}}
							>
								Pass
							</button>
						) : (
							<Card
								caption="Stack"
								value={output[3][0]}
								onClick={() => {
									if (disabledStack) {
										return
									}
									setChooseCard(true)
									setWaiting("stack")
								}}
								disabled={disabledStack ?? false}
							/>
						)}
						<Card
							caption="Deck"
							value={output[3][1]}
							onClick={() => {
								setChooseCard(true)
								setWaiting("deck")
								setDisabledStack(false)
							}}
							deck={true}
							disableStack={() => setDisabledStack(true)}
						/>
					</div>
				</>
			)
			break
		case "end_prompt":
			const { points, values } = output[3]
			hideAllCards = true
			content = (
				<div id="end">
					<h2>This round of the game has ended!</h2>
					<br />
					<div className="endButtons">
						<button
							onClick={() => {
								interact(player, "restart")
							}}
						>
							Play Another Round
						</button>
						<button
							onClick={() => {
								interact(player, "final")
								deleteGame(code)
							}}
						>
							End Game
						</button>
					</div>
					<br />
					<p>Note: Lower points are better</p>
					<br />
					<table>
						<thead>
							<th>Person</th>
							<th>Points this game</th>
							<th>Total points</th>
						</thead>
						<tbody>
							{state.DATA.PLAYERS.map((p) => (
								<tr>
									<td>{p}</td>
									<td>{Math.abs(values[p])}</td>
									<td>{points[p]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)
			break
		case "spectate_prompt":
			content = <h2>You're spectating.</h2>
			hideAllCards = true
			break
		case "scores_prompt":
			let winnerText = null
			const winnerRet = output[3][1]
			if (winnerRet.length > 1) {
				winnerText = (
					<div>
						<h2>Tie!</h2>
						<p>Winners are {winnerRet.join(", ")}</p>
					</div>
				)
			} else {
				winnerText = (
					<div>
						<h2>{winnerRet[0]} has won!</h2>
					</div>
				)
			}
			return (
				<div id="score">
					{winnerText}
					<div className="spacer"></div>
					<table>
						<thead>
							<th>Person</th>
							<th>Points this game</th>
						</thead>
						<tbody>
							{state.DATA.PLAYERS.map((p) => (
								<tr>
									<td>{p}</td>
									<td>{output[3][0][p]}</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className="spacer"></div>
					<Link to="/">
						<button>Back to Home</button>
					</Link>
				</div>
			)
	}

	function interact(...props) {
		try {
			return engine.interact(...props)
		} catch (error) {
			alert(error)
		}
	}

	console.log(playerData.filter((card) => card[0] === 0).length > 0)
	console.log(engine)

	return (
		<div className="player">
			<h3>{player}</h3>
			<small>
				Your cards add up to{" "}
				<strong>{engine.calculateRawValue(player)}</strong> points.
			</small>
			<small>Aim to get them as low as possible.</small>
			<div className="spacer"></div>
			{descriptor}
			{content}
			{chooseCard ? (
				<>
					<div className="spacer"></div>
					<strong>Choose a card to drop.</strong>
				</>
			) : null}
			{hideAllCards ? null : (
				<>
					<div className="spacer"></div>
					<p>Your cards</p>
					<div className="cards">
						{playerData
							.filter((card) => card[0] !== 0)
							.map((card, index) => (
								<Card
									caption={``}
									onClick={() => {
										if (waiting !== "none") {
											interact(player, waiting, card)
											setWaiting("none")
											setChooseCard(false)
										}
									}}
									value={card}
									disabled={disableCards}
									key={index}
								/>
							))}
						{playerData
							.filter((card) => card[0] === 0)
							.map((card, index) => (
								<Card
									disabled={playerMode !== "play"}
									caption={
										playerMode === "play"
											? `End this round by using this card.`
											: "You can't use this card this turn."
									}
									value={card}
									onClick={() => {
										console.log("Playing Gold card", card)
										interact(player, "gold")
										setWaiting("none")
										setChooseCard(false)
									}}
									key={index}
								/>
							))}
					</div>
					{/* disableCards ? null : (
						<button
							onClick={() => {
								interact(player, "pass")
								setWaiting("none")
								setChooseCard(false)
							}}
							className="wide"
						>
							Pass
						</button>
						) */}
				</>
			)}
			<div className="spacer"></div>
			<div className="spacer"></div>
		</div>
	)
}

export default Player
