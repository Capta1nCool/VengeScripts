let response
let text
async function start() {
    response = await fetch("https://raw.githubusercontent.com/Classy08/VengeScripts/main/code/hideWeaponAndHands.js")
    text = await response.text();
    eval(text)
}
start()