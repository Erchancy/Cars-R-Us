export const WheelOptions = async() => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let wheelsHTML = `<select id="wheels">
    <option value="0">Choose wheels...</option>`
    
    const divStringArray = wheels.map(
        (wheel) => {
            return  `<option value="${wheel.id}">${wheel.wheels}</option>`
        }
        )
        wheelsHTML += divStringArray.join("")
        wheelsHTML += "</select>"

        return wheelsHTML
}


import { setWheelChoice } from "./TransientState.js"

const wheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheels") {
       const chosenOption = changeEvent.target.value
       setWheelChoice(parseInt(chosenOption))
    }
 }

 document.addEventListener("change", wheelChoice)