const { Equals } = require("./equals.js")

const t = new Equals(["1", "2", "3"])
t.initialize()
console.log(t.DATA.GAME_STATE.order)
const toPlay = () =>
	Object.entries(t.DATA.MODES).filter(
		(a) => a[1] === "play" || a[1] === "start"
	)[0][0]

const p1 = toPlay()
t.interact(p1, "deck", t.DATA.CARDS_STATE[p1][1])

console.log("P1 was", p1)

const p2 = toPlay()
t.interact(p2, "deck", t.DATA.CARDS_STATE[p2][1])

const p3 = toPlay()
t.interact(p3, "deck", t.DATA.CARDS_STATE[p3][1])

console.log("will play gold", toPlay())

t.interact(toPlay(), "gold")

console.log("playing after gold", toPlay())

t.interact(toPlay(), "deck", t.DATA.CARDS_STATE[p2][1])
t.interact(toPlay(), "deck", t.DATA.CARDS_STATE[p3][1])

console.log(toPlay())

console.log(t.DATA.MODES)
