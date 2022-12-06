
const bombs = new Set()

while(bombs.size !== 5) {
    let rowNr = Math.floor(Math.random() * 100) +1
    let colNr = Math.floor(Math.random() * 100) +1
    bombs.add(`${rowNr} - ${colNr}`)
}

console.log(bombs)