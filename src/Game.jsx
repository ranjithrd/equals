import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import {
	getGame,
	getGameData,
	listenGame,
	listenSch,
	addPlayer,
	updateGame,
	deleteGame,
} from "./firebase.js"
import { Equals } from "./equals.js"
import Player from "./Player.jsx"

function copyInstance(original) {
	var copied = Object.assign(
		Object.create(Object.getPrototypeOf(original)),
		original
	)
	return copied
}

let Engine = new Equals([])

function Game({}) {
	const navigate = useNavigate()
	const { code, name } = useParams()
	const codeNum = parseInt(code)

	const [players, setPlayers] = useState([])
	const [started, setStarted] = useState(false)
	const [data, setData] = useState(Engine)
	const [loaded, setLoaded] = useState(false)
	const [localState, setLocalState] = useState("schedule")
	const [initialized, setInitialized] = useState(false)

	console.log("Game render")
	console.log(loaded)

	useEffect(() => {
		;(async () => {
			const playersData = await getGame(code)
			if (playersData) {
				if (!Object.values(playersData).includes(name)) {
					addPlayer(code, name)
				}
				setPlayers(Object.values(playersData))
			} else {
				return null
			}

			const gameData = await getGameData(code)
			if (gameData) {
				setStarted(true)
			}

			setLoaded(true)

			listenSch(code, (val) => {
				setPlayers([...Object.values(val)])
			})
			listenGame(code, (val) => {
				console.log("CHANGE IN FIREBASE.")
				console.log(val)
				if (
					JSON.parse(val).initialized &&
					JSON.parse(val).PLAYERS.length === players.length
				) {
					setInitialized(true)
				}
				Engine.update(val)
			})
			Engine.listen(
				() => {
					console.log("CHANGE IN ENGINE...")
					console.log("New Engine Data:")
					console.log(Engine.exportData())
					updateGame(code, JSON.stringify(Engine.exportData()))
				},
				() => {
					console.log("CHANGE IN RENDER...")
					console.log("New Engine Data:")
					console.log(Engine.exportData())
					setData(copyInstance(Engine))
				}
			)
		})()
	}, [code, localState])

	useEffect(() => {
		const i = setInterval(() => {
			if (data.DATA.PLAYERS.length !== players.length) {
				setInitialized(!initialized)
				setData(copyInstance(Engine))
			}
		}, 5000)

		return () => {
			clearInterval(i)
		}
	}, [])

	if (codeNum < 100_000 || codeNum > 999_999) {
		return (
			<main>
				<h2>Invalid code!</h2>
			</main>
		)
	}

	if (!loaded) {
		return (
			<main>
				<p>Loading...</p>
			</main>
		)
	}

	console.log(data)

	console.log(data.DATA.PLAYERS.length)
	console.log(players.length)
	console.log(initialized)
	if (data.DATA.PLAYERS.length !== players.length) {
		return (
			<main>
				<p>Initializing...</p>
			</main>
		)
	}

	async function handleStart() {
		Engine = new Equals([...players])
		Engine.initialize()
		const exportedData = Engine.exportData()
		await updateGame(code, exportedData)
		setLocalState("game")
		console.log("Started!")
	}

	if (!started) {
		return (
			<main>
				<h2>Game not started yet.</h2>
				<button onClick={handleStart}>Start Game?</button>
				<p>
					New players won't be able to join once you start the game.
				</p>
				<div className="spacer"></div>
				<h3>Add friends with this code</h3>
				<code>{code}</code>
				<div className="spacer"></div>
				<p>Players</p>
				<table>
					<thead>
						<th>Player</th>
					</thead>
					<tbody>
						{players.map((p) => (
							<tr>
								<td>{p}</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		)
	}

	console.log(data)

	// console.log("Initalized:", data.DATA.initialized)

	// if (!data.DATA.initialized) {
	// 	return (
	// 		<main>
	// 			<p>Intializing engine...</p>
	// 		</main>
	// 	)
	// }

	return (
		<main>
			<h2>Equals</h2>
			<div className="endButtons">
				<button
					onClick={() => {
						deleteGame(code)
						navigate("/")
					}}
				>
					End game
				</button>
			</div>
			{/*JSON.stringify(data)*/}
			<Player state={data} engine={Engine} player={name} key={name} />
		</main>
	)
}

export default Game
