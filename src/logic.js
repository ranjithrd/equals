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
	PLAYERS = []
	DECK = []
	STACK = []
	CARDS_STATE = []
	MODES = {}
	CARDS_PER_PLAYER = this.PLAYERS.length < 4 ? 5 : 3
	POINTS = {}
	ON_CHANGE = () => {}
	GAME_STATE = {
		startPlayer: "",
		gamesPlayed: 0,
		order: [],
	}
	VALUES = {}
	initialized = false

	constructor(players) {
		this.PLAYERS = players
		const randomized = this.#randomizeDeck([...players])
		this.GAME_STATE = {
			gamesPlayed: 0,
			order: randomized,
			startPlayer: randomized[0],
		}
		console.log(randomized)
		console.log(this)
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
		repeat(() => DECK.push([GOLD, 0]), 8 - this.PLAYERS.length)

		const nd = this.#randomizeDeck(DECK)
		DECK = [...nd]

		const i = randomBetween(0, DECK.length)

		this.STACK = []
		this.STACK.push(DECK[i])

		DECK.splice(i, 1)

		this.DECK = DECK
	}

	// DISTRIBUTE PLAYER CARDS
	#initializeCardsState() {
		let cardsState = []

		for (let player of this.PLAYERS) {
			cardsState[player] = []
			for (let i = this.CARDS_PER_PLAYER; i > 0; i--) {
				if (i == 1) {
					cardsState[player].push([GOLD, 0])
				} else {
					let randomIndex = randomBetween(0, this.DECK.length - 1)
					while (
						randomIndex >= this.DECK.length ||
						this.DECK[randomIndex][0] === GOLD
					) {
						randomIndex = randomBetween(0, this.DECK.length)
					}
					const card = [...this.DECK[randomIndex]]
					cardsState[player].push(card)
					this.DECK.splice(randomIndex, 1)
				}
			}
		}

		this.CARDS_STATE = cardsState
	}

	// INITIALIZE MODES
	#initializeModes() {
		let mode = {}

		for (let player of this.PLAYERS) {
			mode[player] = "out"
			if (player === this.GAME_STATE.startPlayer) {
				mode[player] = "start"
			}
		}

		this.MODES = mode
	}

	// INITIALIZE POINTS
	#initializePoints() {
		for (let player of this.PLAYERS) {
			this.POINTS[player] = 0
			this.VALUES[player] = 0
		}
	}

	// ON CHANGE LISTENER CALL METHODS
	#onChange() {
		this.#calculateAllPlayerValues()
		// this.#refreshPoints()
		this.ON_CHANGE?.(this)
	}

	// UTILITY CHANGE METHODS
	#setMode(player, mode, all) {
		if (all) {
			for (let k of this.PLAYERS) {
				this.MODES[k] = mode
			}
		}
		this.MODES[player] = mode
	}
	#setPoints(player, points) {
		this.POINTS[player] += Math.abs(points)
	}
	#refreshPoints() {
		for (let player of this.PLAYERS) {
			this.POINTS[player] += this.#calculatePlayerValue(player)
		}
	}

	// CALCULATE PLAYER VALUE
	#calculatePlayerValue(player) {
		return Math.abs(
			this.CARDS_STATE[player].reduce((p, c) => p + c[0] * c[1], 0)
		)
	}
	#calculateAllPlayerValues() {
		for (let val of this.PLAYERS) {
			this.VALUES[val] = this.#calculatePlayerValue(val)
		}
	}

	// P U B L I C   M E T H O D S

	// NEXT TURN
	nextPlayer(player) {
		console.log("Changing to next player	")
		console.log("Current Player", player)
		const i = this.GAME_STATE.order.findIndex((e) => e === player)
		let reqI = -1
		if (i + 1 >= this.GAME_STATE.order.length) {
			reqI = 0
		} else {
			reqI = i + 1
		}
		console.log("Next Player", this.GAME_STATE.order[reqI])
		this.#setMode("", "out", true)
		this.#setMode(this.GAME_STATE.order[reqI], "play")
	}

	// CALCULATE WINNERS
	calculateWinners() {
		let winners = [this.PLAYERS[0]]
		for (let player of this.PLAYERS) {
			const p = this.POINTS[player]
			const maxPoints = this.POINTS[winners[0]]
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
	listen(callback) {
		this.ON_CHANGE = callback
	}

	// INITIALIZE ALL
	initialize() {
		console.log("Attempting initialization...")
		console.log(
			this.initialized ? "Already initialized." : "Not initialized."
		)
		if (this.initialized) {
			return
		}

		this.#initializeDeck()
		this.#initializeCardsState()
		this.#initializeModes()
		this.#initializePoints()
		this.#calculateAllPlayerValues()

		this.logPlayerValues()

		this.initialized = true

		return this.exportData()
	}

	update(json) {
		if (!json) return
		try {
			let data = JSON.parse(json)
			this.PLAYERS = data.PLAYERS
			this.DECK = data.DECK
			this.STACK = data.STACK
			this.CARDS_STATE = data.CARDS_STATE
			this.MODES = data.MODES
			this.CARDS_PER_PLAYER = data.CARDS_PER_PLAYER
			this.POINTS = data.POINTS
			this.GAME_STATE = data.GAME_STATE
			this.VALUES = data.VALUES
		} catch (error) {
			console.error(error)
		}
	}

	exportData() {
		let data = {
			PLAYERS: this.PLAYERS,
			DECK: this.DECK,
			STACK: this.STACK,
			CARDS_STATE: this.CARDS_STATE,
			MODES: this.MODES,
			CARDS_PER_PLAYER: this.CARDS_PER_PLAYER,
			POINTS: this.POINTS,
			GAME_STATE: this.GAME_STATE,
			VALUES: this.VALUES,
		}
		console.log("Export")
		console.log(data)
		return data
	}

	addPlayer(playerName) {
		this.PLAYERS.push(playerName)
		this.#initializeDeck()
		this.#initializeCardsState()
		this.#initializeModes()
		this.#initializePoints()
	}

	// LOG RANKED PLAYER VALUES
	logPlayerValues() {
		let table = []

		for (let player of Object.entries(this.CARDS_STATE)) {
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

		const playerStatus = this.MODES[player]
		const playerData = this.CARDS_STATE[player]

		const stackCard = this.STACK.slice(-1)[0]
		const deckCard = this.DECK.slice(-1)[0]

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
				this.STACK.splice(-1, 1)

				// push player's card
				this.STACK.push(data)

				// replace player's card

				console.log(this.DECK)
				console.log(this)
				console.log(this.#randomizeDeck)

				// reshuffle deck
				this.DECK = this.#randomizeDeck(this.DECK)

				const dI = this.CARDS_STATE[player].findIndex(
					(e) => e[0] === data[0] && e[1] === data[1]
				)
				this.CARDS_STATE[player][dI] = [...stackCard]

				this.nextPlayer(player)
				break
			case "deck":
				// take top card from deck
				// take card from player
				if (!data) throw new Error("Card not dropped.")

				// remove the previous card
				this.DECK.splice(-1, 1)

				// push player's card
				this.STACK.push(data)

				// reshuffle deck
				this.DECK = this.#randomizeDeck(this.DECK)

				const sI = this.CARDS_STATE[player].findIndex(
					(e) => e[0] === data[0] && e[1] === data[1]
				)
				this.CARDS_STATE[player][sI] = [...deckCard]

				this.nextPlayer(player)
				break
			case "gold":
				// act the gold card
				this.#calculateAllPlayerValues()
				this.#refreshPoints()

				if (PLAYERS.length > 2) {
					this.#setMode(player, "spectate")
					this.nextPlayer()
				} else {
					this.#setMode(player, "end", true)
				}
				break
			case "pass":
				// pass on turn
				this.#setMode(player, "out")
				this.DECK.splice(-1, 1)
				this.STACK.splice(-1, 1)
				this.STACK.push(deckCard)
				this.DECK = this.#randomizeDeck(this.DECK)
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

		if (this.DECK.length < 1) {
			this.#refreshPoints()
			this.#setMode(player, "end", true)
		}

		this.#onChange()
	}

	// STATE TO DISPLAY
	// returns: [promptType, promptText, actions, data]
	output(player) {
		const modeOfPlayer = this.MODES[player]
		const playerData = this.CARDS_STATE[player]

		const stackCard = this.STACK.slice(-1)[0]
		const deckCard = this.DECK.slice(-1)[0]

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
					{ points: this.POINTS, values: this.VALUES },
				]
			case "spectate":
				return [
					"spectate_prompt",
					"You have to spectate, the game is continuing for others.",
					ACTIONS.spectate,
					this.CARDS_STATE,
				]
			case "score":
				return [
					"scores_prompt",
					"The game is over, here are your scores!",
					ACTIONS.score,
					[this.POINTS, this.calculateWinners()],
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
