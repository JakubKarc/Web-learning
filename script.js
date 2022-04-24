let lengthEl = document.getElementById("length-out")
let volumeEl = document.getElementById("volume-out")
let massEl = document.getElementById("mass-out")

let value = 1

lengthEl.textContent = value + " meters = " + value * 3.28084 + " feet | " + value + " feet = " + value * 0.3048 + " meters"

volumeEl.textContent = value + " meters = " + value * 0.264172 + " feet | " + value + " feet = " + value * 3.78541 + " meters"

massEl.textContent = value + " meters = " + value * 2.20462 + " feet | " + value + " feet = " + value * 0.453592 + " meters"

function inputFunc() {
    var value = document.getElementById("input").value

    console.log(value)

    lengthEl.textContent = value + " meters = " + value * 3.28084 + " feet | " + value + " feet = " + value * 0.3048 + " meters"

    volumeEl.textContent = value + " meters = " + value * 0.264172 + " feet | " + value + " feet = " + value * 3.78541 + " meters"

    massEl.textContent = value + " meters = " + value * 2.20462 + " feet | " + value + " feet = " + value * 0.453592 + " meters"
}
