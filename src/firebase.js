import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {
	getDatabase,
	ref,
	set,
	get,
	onValue,
	update,
	push,
	remove,
} from "firebase/database"
import { Equals } from "../lib/equals.js"

export async function initialise() {
	const firebaseConfig = {
		apiKey: "AIzaSyB6mOm2r-gLbSUOoCrmGZmBdLcY1d0ulM8",
		authDomain: "equals-game.firebaseapp.com",
		databaseURL: "https://equals-game-default-rtdb.firebaseio.com",
		projectId: "equals-game",
		storageBucket: "equals-game.appspot.com",
		messagingSenderId: "6168072544",
		appId: "1:6168072544:web:69348eefe7c4e9cf288e05",
		measurementId: "G-CZ2Y1GVRDC",
	}

	const app = initializeApp(firebaseConfig)
	const analytics = getAnalytics(app)
	console.log("initialised analytics", analytics.app.name)
}

export async function create(name) {
	const db = getDatabase()

	let rand = Math.random()
	let sixDigits = Math.floor(rand * 1_000_000)
	while (rand < 0.11 || rand > 0.99) {
		rand = Math.random()
		sixDigits = Math.floor(rand * 1_000_000)
	}
	const newRef = ref(db, `/scheduled/${sixDigits}`)

	await push(newRef, name)

	return sixDigits
}

export async function createGame(code, gameData) {
	const db = getDatabase()
	const schRef = ref(db, `/scheduled/${code}`)
	const gameRef = ref(db, `/games/${code}`)

	await remove(schRef)
	await set(gameRef, JSON.stringify(gameData))
}

export async function getGame(code) {
	const db = getDatabase()
	const r = ref(db, `/scheduled/${code}`)
	const data = (await get(r)).val()
	console.log("Data for ", code)
	console.log(data)
	return data
}

export async function getGameData(code) {
	const db = getDatabase()
	const r = ref(db, `/games/${code}`)
	const data = (await get(r)).val()
	console.log("Data for ", code)
	console.log(data)
	return data
}

export async function listenSch(code, callback) {
	const db = getDatabase()
	const r = ref(db, `/scheduled/${code}`)
	onValue(r, (snap) => {
		callback(snap.val())
	})
}

export async function listenGame(code, cb) {
	const db = getDatabase()
	const r = ref(db, `/games/${code}`)
	onValue(r, (snap) => {
		cb(snap.val())
	})
}

export async function addPlayer(code, playerName) {
	const db = getDatabase()
	const r = ref(db, `/scheduled/${code}`)
	await push(r, playerName)
}

export async function updateGame(code, data) {
	console.log("UPDATING FIREBASE...")
	const db = getDatabase()
	const r = ref(db, `/games/${code}`)
	await set(r, data)
}

export async function deleteGame(code) {
	const db = getDatabase()
	const r = ref(db, `/games/${code}`)
	await remove(r)
}
