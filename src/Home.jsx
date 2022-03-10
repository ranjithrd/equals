import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { create, getGame } from "./firebase"

function Home() {
	const [error, setError] = useState("")

	const navigate = useNavigate()

	async function handleCreate(e) {
		e.preventDefault()

		const name = e.target.name.value
		if (!name || name.trimLeft().trimRight() == "") {
			return
		}

		const newCode = await create(name)

		navigate(`/${newCode}/${name}`)
	}

	return (
		<>
			<main id="home">
				<div>
					<h1>Equals</h1>
					<Link to="/tutorial">
						Haven't played? Click for a tutorial
					</Link>
				</div>

				<form
					onSubmit={async (e) => {
						e.preventDefault()
						setError("")
						const n = parseInt(e.target.code.value)
						if (n < 100_000 || n > 999_999) {
							setError("Invalid code. Please try again.")
							return
						}
						const data = await getGame(n)
						console.log(data)
						if (!data) {
							setError("This game does not exist.")
							return
						}

						// if (JSON.parse(data).started) {
						// 	setError("Game already started!")
						// 	return
						// }

						const name = e.target.name.value
						if (!name || name.trimRight().trimLeft() == "") {
							setError("Enter your name.")
							return
						}

						navigate(`/${n}/${name}`)
					}}
				>
					<input
						type="number"
						name="code"
						id="code"
						placeholder="Enter the 6 digit game code"
						required
					/>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
						required
					/>
					<button type="submit">Join</button>
					<p>{error}</p>
				</form>

				<form onSubmit={handleCreate}>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
						required
					/>
					<button type="submit">Create a new game</button>
				</form>
			</main>
			<a href="https://ranjithrd.github.io" className="noStyle">
				Designed and built by Ranjith RD
			</a>
		</>
	)
}

export default Home
