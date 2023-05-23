export const TechnologyOptions = async() => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    let technologyHTML = `<select id="technology">
    <option value="0">Choose a package...</option>`
    
    const divStringArray = technologies.map(
        (technology) => {
            return  `<option value="${technology.id}">${technology.package}</option>`
        }
        )
        technologyHTML += divStringArray.join("")
        technologyHTML += "</select>"

        return technologyHTML
}

import { setTechChoice } from "./TransientState.js"

const techChoice = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
       const chosenOption = changeEvent.target.value
       setTechChoice(parseInt(chosenOption))
    }
 }

 document.addEventListener("change", techChoice)