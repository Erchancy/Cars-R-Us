export const InteriorOptions = async() => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let interiorHTML = `<select id="interior">
    <option value="0">Choose an interior...</option>`
    
    const divStringArray = interiors.map(
        (interior) => {
            return  `<option value="${interior.id}">${interior.type}</option>`
        }
        )
        interiorHTML += divStringArray.join("")
        interiorHTML += "</select>"

        return interiorHTML
}

import { setInteriorChoice } from "./TransientState.js"

const interiorChoice = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
       const chosenOption = changeEvent.target.value
       setInteriorChoice(parseInt(chosenOption))
    }
 }

 document.addEventListener("change", interiorChoice)