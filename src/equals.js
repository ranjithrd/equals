import onChange from "on-change"
import { randomBetween, repeat } from "./util.js"

// const PLAYERS = ["Player One", "Player Two"]
// const CARDS_PER_PLAYER = PLAYERS.length < 4 ? 5 : 3

const ACTIONS = {
	out: [],
	play: ["stack", "deck", "gold", "pass"],
	start: ["stack", "deck", "pass"],
	// TODO
	end: ["restart", "final"],
	score: [],
	spectate: [],
	default: [],
}

const RED = -1
const GOLD = 0
const BLUE = +1

export class Equals {
	DATA = {
		PLAYERS: [],
		DECK: [],
		STACK: [],
		CARDS_STATE: {},
		MODES: {},
		POINTS: {},
		GAME_STATE: {
			startPlayer: "",
			gamesPlayed: 0,
			order: [],
		},
		VALUES: {},
		initialized: false,
	}
	ON_CHANGE = () => {}
	RENDER = () => {}
	CARDS_PER_PLAYER = this.DATA.PLAYERS.length < 4 ? 5 : 3

	constructor(players) {
		this.DATA.PLAYERS = players
		const randomized = this.#randomizeDeck([...players])
		this.DATA.GAME_STATE = {
			gamesPlayed: 0,
			order: randomized,
			startPlayer: randomized[0],
		}
		console.log(randomized)
		console.log(this.DATA)
	}

	// INITIALIZE DECK
	#randomizeDeck(deck) {
		let d = [...deck]
		console.log(d)
		let nd = []
		for (let i = d.length; i > 0; i--) {
			const ri = randomBetween(0, i - 1)
			nd.push(d[ri])
			d.splice(ri, 1)
		}
		return nd
	}

	#initializeDeck() {
		let DECK = []

		repeat(() => DECK.push([RED, 1]), 6)
		repeat(() => DECK.push([RED, 2]), 6)
		repeat(() => DECK.push([RED, 3]), 6)
		repeat(() => DECK.push([BLUE, 1]), 6)
		repeat(() => DECK.push([BLUE, 2]), 6)
		repeat(() => DECK.push([BLUE, 3]), 6)
		repeat(() => DECK.push([GOLD, 0]), 8 - this.DATA.PLAYERS.length)

		const nd = this.#randomizeDeck(DECK)
		DECK = [...nd]

		const i = randomBetween(0, DECK.length)

		this.DATA.STACK = []
		this.DATA.STACK.push(DECK[i])

		DECK.splice(i, 1)

		this.DATA.DECK = DECK
	}

	// DISTRIBUTE PLAYER CARDS
	#initializeCardsState() {
		let cardsState = {}

		for (let player of this.DATA.PLAYERS) {
			console.log("Player", player)
			cardsState[player] = []
			for (let i = this.CARDS_PER_PLAYER; i > 0; i--) {
				if (i == 1) {
					cardsState[player].push([GOLD, 0])
				} else {
					let randomIndex = randomBetween(
						0,
						this.DATA.DECK.length - 1
					)
					while (
						randomIndex >= this.DATA.DECK.length ||
						this.DATA.DECK[randomIndex][0] === GOLD
					) {
						randomIndex = randomBetween(0, this.DATA.DECK.length)
					}
					const card = [...this.DATA.DECK[randomIndex]]
					cardsState[player].push(card)
					this.DATA.DECK.splice(randomIndex, 1)
				}
			}
		}

		this.DATA.CARDS_STATE = cardsState
	}

	// INITIALIZE MODES
	#initializeModes() {
		let mode = {}

		for (let player of this.DATA.PLAYERS) {
			mode[player] = "out"
			if (player === this.DATA.GAME_STATE.startPlayer) {
				mode[player] = "start"
			}
		}

		this.DATA.MODES = mode
	}

	// INITIALIZE POINTS
	#initializePoints() {
		for (let player of this.DATA.PLAYERS) {
			this.DATA.POINTS[player] = 0
			this.DATA.VALUES[player] = 0
		}
	}

	// ON CHANGE LISTENER CALL METHODS
	#onChange() {
		console.log("Engine calling change method...")
		this.#calculateAllPlayerValues()
		// this.#refreshPoints()
		this.ON_CHANGE?.(this.DATA)
		this.RENDER?.(this.DATA)
	}

	// UTILITY CHANGE METHODS
	#setMode(player, mode, all) {
		if (all) {
			for (let k of this.DATA.PLAYERS) {
				this.DATA.MODES[k] = mode
			}
		}
		this.DATA.MODES[player] = mode
	}
	#setPoints(player, points) {
		this.DATA.POINTS[player] += Math.abs(points)
	}
	#refreshPoints() {
		for (let player of this.DATA.PLAYERS) {
			this.DATA.POINTS[player] += this.#calculatePlayerValue(player)
		}
	}

	// CALCULATE PLAYER VALUE
	#calculatePlayerValue(player) {
		return Math.abs(
			this.DATA.CARDS_STATE[player].reduce((p, c) => p + c[0] * c[1], 0)
		)
	}
	calculateRawValue(player) {
		return this.DATA.CARDS_STATE[player].reduce(
			(p, c) => p + c[0] * c[1],
			0
		)
	}
	#calculateAllPlayerValues() {
		for (let val of this.DATA.PLAYERS) {
			this.DATA.VALUES[val] = this.#calculatePlayerValue(val)
		}
	}

	// P U B L I C   M E T H O D S

	// NEXT TURN
	nextPlayer(player) {
		console.log("Changing to next player	")
		console.log("Current Player", player)
		const i = this.DATA.GAME_STATE.order.findIndex((e) => e === player)
		let reqI = -1
		if (i + 1 >= this.DATA.GAME_STATE.order.length) {
			reqI = 0
		} else {
			reqI = i + 1
		}
		console.log("Next Player", this.DATA.GAME_STATE.order[reqI])
		this.#setMode("", "out", true)
		this.#setMode(this.DATA.GAME_STATE.order[reqI], "play")
	}

	// CALCULATE WINNERS
	calculateWinners() {
		let winners = [this.DATA.PLAYERS[0]]
		for (let player of this.DATA.PLAYERS) {
			const p = this.DATA.POINTS[player]
			const maxPoints = this.DATA.POINTS[winners[0]]
			if (p < maxPoints) {
				winners = [player]
			}
			if (p === maxPoints) {
				winners.push(player)
			}
		}
		return winners
	}

	// ADD CALLBACK
	listen(callback, render) {
		this.ON_CHANGE = callback
		this.RENDER = render
		console.log(this.ON_CHANGE)
		console.log(this.RENDER)
	}

	// INITIALIZE ALL
	initialize() {
		console.log("Attempting initialization...")
		console.log(
			this.DATA.initialized ? "Already initialized." : "Not initialized."
		)
		if (this.DATA.initialized) {
			return
		}

		this.#initializeDeck()
		this.#initializeCardsState()
		this.#initializeModes()
		this.#initializePoints()
		this.#calculateAllPlayerValues()

		this.logPlayerValues()

		this.DATA.initialized = true

		return this.exportData()
	}

	update(json) {
		if (!json) return
		try {
			console.log(json)
			let data = JSON.parse(json)
			console.log("Parsed")
			console.log(data)
			this.DATA = {
				...this.DATA,
				...data,
			}
			this.RENDER?.(this.DATA)
		} catch (error) {
			console.error(error)
		}
	}

	exportData() {
		// let data = {
		// 	PLAYERS: this.DATA.PLAYERS,
		// 	DECK: this.DATA.DECK,
		// 	STACK: this.DATA.STACK,
		// 	CARDS_STATE: this.DATA.CARDS_STATE,
		// 	MODES: this.DATA.MODES,
		// 	CARDS_PER_PLAYER: this.DATA.CARDS_PER_PLAYER,
		// 	POINTS: this.DATA.POINTS,
		// 	GAME_STATE: this.DATA.GAME_STATE,
		// 	VALUES: this.DATA.VALUES,
		// }
		console.log("Export")
		console.log(this.DATA)
		return this.DATA
	}

	addPlayer(playerName) {
		this.DATA.PLAYERS.push(playerName)
		this.#initializeDeck()
		this.#initializeCardsState()
		this.#initializeModes()
		this.#initializePoints()
	}

	// LOG RANKED PLAYER VALUES
	logPlayerValues() {
		let table = []

		for (let player of Object.entries(this.DATA.CARDS_STATE)) {
			const val = this.#calculatePlayerValue(player[0])
			table.push([player[0], val])
		}

		table.sort((a, b) => b[1] - a[1])
		const newTable = Object.fromEntries(table)

		console.table(newTable)
		return newTable
	}

	// CHANGE STATE
	interact(player, action, data) {
		console.log("Interaction from", player)
		console.log(action)
		console.log(data)

		const playerStatus = this.DATA.MODES[player]
		const playerData = this.DATA.CARDS_STATE[player]

		const stackCard = this.DATA.STACK.slice(-1)[0]
		const deckCard = this.DATA.DECK.slice(-1)[0]

		// VALIDATE THE ACTION
		const isValid = ACTIONS[playerStatus].includes(action)
		if (!isValid) {
			throw new Error("Wrong action sent.")
		}

		switch (action) {
			case "stack":
				// take previous card dropped
				// take card from player
				if (!data) throw new Error("Card not dropped.")

				// remove the previous card
				this.DATA.STACK.splice(-1, 1)

				// push player's card
				this.DATA.STACK.push(data)

				// replace player's card

				console.log(this.DATA.DECK)
				console.log(this.DATA)
				console.log(this.#randomizeDeck)

				// reshuffle deck
				this.DATA.DECK = this.#randomizeDeck(this.DATA.DECK)

				const dI = this.DATA.CARDS_STATE[player].findIndex(
					(e) => e[0] === data[0] && e[1] === data[1]
				)
				this.DATA.CARDS_STATE[player][dI] = [...stackCard]

				this.nextPlayer(player)
				break
			case "deck":
				// take top card from deck
				// take card from player
				if (!data) throw new Error("Card not dropped.")

				// remove the previous card
				this.DATA.DECK.splice(-1, 1)

				// push player's card
				this.DATA.STACK.push(data)

				// reshuffle deck
				this.DATA.DECK = this.#randomizeDeck(this.DATA.DECK)

				const sI = this.DATA.CARDS_STATE[player].findIndex(
					(e) => e[0] === data[0] && e[1] === data[1]
				)
				this.DATA.CARDS_STATE[player][sI] = [...deckCard]

				this.nextPlayer(player)
				break
			case "gold":
				// act the gold card
				this.#calculateAllPlayerValues()
				this.#refreshPoints()

				if (this.DATA.PLAYERS.length > 2) {
					this.#setMode(player, "spectate")
					this.nextPlayer()
				} else {
					this.#setMode(player, "end", true)
				}
				break
			case "pass":
				// pass on turn
				this.#setMode(player, "out")
				this.DATA.DECK.splice(-1, 1)
				this.DATA.STACK.splice(-1, 1)
				this.DATA.STACK.push(deckCard)
				this.DATA.DECK = this.#randomizeDeck(this.DATA.DECK)
				this.nextPlayer(player)
				break
			case "restart":
				// restart game
				this.#initializeDeck()
				this.#initializeCardsState()
				this.#initializeModes()
				this.#calculateAllPlayerValues()

				this.logPlayerValues()
				break
			case "final":
				// end game with points table
				this.#setMode(player, "score", true)
				break
		}

		if (this.DATA.DECK.length < 1) {
			this.#refreshPoints()
			this.#setMode(player, "end", true)
		}

		console.log("Interaction completed.")
		this.#onChange()
	}

	// STATE TO DISPLAY
	// returns: [promptType, promptText, actions, data]
	output(player) {
		const modeOfPlayer = this.DATA.MODES[player]
		const playerData = this.DATA.CARDS_STATE[player]

		const stackCard = this.DATA.STACK.slice(-1)[0]
		const deckCard = this.DATA.DECK.slice(-1)[0]

		switch (modeOfPlayer) {
			case "out":
				return [
					"not_turn_prompt",
					"Not your turn yet!",
					ACTIONS.out,
					null,
				]
			case "play":
				return [
					"round_prompt",
					"Choose either the card at the top of the deck or draw a card from the deck.",
					ACTIONS.play,
					[stackCard, deckCard, playerData],
				]
			case "start":
				return [
					"start_prompt",
					"Start the game by choosing either the card at the top of the stack or the deck.",
					ACTIONS.start,
					[stackCard, deckCard, playerData],
				]
			case "end":
				return [
					"end_prompt",
					"The game has ended!",
					ACTIONS.end,
					{ points: this.DATA.POINTS, values: this.DATA.VALUES },
				]
			case "spectate":
				return [
					"spectate_prompt",
					"You have to spectate, the game is continuing for others.",
					ACTIONS.spectate,
					this.DATA.CARDS_STATE,
				]
			case "score":
				return [
					"scores_prompt",
					"The game is over, here are your scores!",
					ACTIONS.score,
					[this.DATA.POINTS, this.calculateWinners()],
				]
			default:
				return [
					"error",
					"Error: Unknown or unsupported status found!",
					ACTIONS.default,
					null,
				]
		}
	}
}

const t = new Equals(["t"])
t.initialize()
t.update(
	'{"PLAYERS":["Ranjith"],"DECK":[[0,0],[1,1],[0,0],[1,1],[-1,1],[1,1],[-1,2],[0,0],[1,3],[-1,2],[-1,2],[1,3],[1,1],[1,2],[1,2],[-1,2],[1,2],[1,3],[-1,2],[0,0],[1,2],[-1,1],[0,0],[-1,2],[-1,1],[-1,1],[1,3],[-1,3],[0,0],[1,3],[-1,3],[-1,3],[1,2],[-1,3],[1,1],[1,2],[0,0],[-1,1],[1,2],[0,0],[1,1],[-1,3],[-1,3],[-1,1],[1,3]],"STACK":[[1,1]],"CARDS_STATE":{"Ranjith":[[-1,3],[1,3],[-1,2],[-1,1],[0,0]]},"MODES":{"Ranjith":"start"},"POINTS":{"Ranjith":0},"GAME_STATE":{"gamesPlayed":0,"order":["Ranjith"],"startPlayer":"Ranjith"},"VALUES":{"Ranjith":3},"initialized":true,"started":false}'
)
console.log(t.output("Ranjith"))
