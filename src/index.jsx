import React, { useState, useEffect } from "react"
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { initialise } from "./firebase"
import Game from "./Game"
import Home from "./Home"
import Tutorial from "./Tutorial"
// import Player from "./Player"

// function copyInstance(original) {
// 	var copied = Object.assign(
// 		Object.create(Object.getPrototypeOf(original)),
// 		original
// 	)
// 	return copied
// }

// const EqualsEngine = new Equals(["Player One", "Player Two"])

function App() {
	const [loaded, setLoaded] = useState(false)
	// const [game, setGame] = useState(EqualsEngine)

	useEffect(() => {
		;(async () => {
			// console.log("init")
			await initialise()
			// EqualsEngine.initialize()
			console.log("init complete")
			setLoaded(true)
			// console.log("completed init")
			// EqualsEngine.listen((newGame) => {
			// 	setGame(copyInstance(newGame))
			// 	console.log("Data changed!")
			// })
		})()
	}, [])

	if (!loaded) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:code/:name" element={<Game loaded={loaded} />} />
				<Route path="/tutorial" element={<Tutorial />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)

	// return (
	// 	<main>
	// 		{loaded
	// 			? game.PLAYERS.map((player) => (
	// 					<Player
	// 						state={game}
	// 						player={player}
	// 						engine={EqualsEngine}
	// 					/>
	// 			  ))
	// 			: "Loading..."}
	// 	</main>
	// )
}

render(<App />, document.getElementById("app"))
