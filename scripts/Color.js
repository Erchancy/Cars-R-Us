//This component module builds an HTML representation of the paint color data and includes a change event listener to update the transient state when an option is selected

export const ColorOptions = async() => {
    const response = await fetch("http://localhost:8088/colors")
    const colors = await response.json()

    let colorsHTML = `<select id="color">
    <option value="0">Choose a color...</option>`
    
    const divStringArray = colors.map(
        (color) => {
            return  `<option value="${color.id}">${color.color}</option>`
        }
        )
        colorsHTML += divStringArray.join("")
        colorsHTML += "</select>"

        return colorsHTML
}


import { setColorChoice } from "./TransientState.js"

const colorChoice = (changeEvent) => {
    if (changeEvent.target.id === "color") {
       const chosenOption = changeEvent.target.value
       setColorChoice(parseInt(chosenOption))
    }
 }

 document.addEventListener("change", colorChoice)