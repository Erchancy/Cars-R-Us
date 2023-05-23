export const ModelOptions = async() => {
    const response = await fetch("http://localhost:8088/models")
    const models = await response.json()

    let modelsHTML = `<select id="model">
    <option value="0">Choose a model...</option>`
    
    const divStringArray = models.map(
        (model) => {
            return  `<option value="${model.id}">${model.type}</option>`
        }
        )
        modelsHTML += divStringArray.join("")
        modelsHTML += "</select>"

        return modelsHTML
}


import { setModelChoice } from "./TransientState.js"

const modelChoice = (changeEvent) => {
    if (changeEvent.target.id === "model") {
       const chosenOption = changeEvent.target.value
       setModelChoice(parseInt(chosenOption))
    }
 }

 document.addEventListener("change", modelChoice)