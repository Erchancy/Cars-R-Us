const transientState = {
        "id": 0,
        "colorsId": 0,
        "interiorId": 0,
        "technologiesId": 0,
        "wheelsId": 0,
        "modelId": 0
}

export const setColorChoice = (colorChoice) => {
    transientState.colorsId = colorChoice
    console.log(transientState)
}

export const setInteriorChoice = (interiorChoice) => {
    transientState.interiorId = interiorChoice
    console.log(transientState)
}

export const setTechChoice = (techChoice) => {
    transientState.technologiesId = techChoice
    console.log(transientState)
}

export const setWheelChoice = (wheelChoice) => {
    transientState.wheelsId = wheelChoice
    console.log(transientState)
}

export const setModelChoice = (modelChoice) => {
    transientState.modelId = modelChoice
    console.log(transientState)
}

// Function to convert transient state to permanent state
export const placeOrder = async () => { // Export and declare the function, it is asynchornous
    const postOptions = {   // Defines an object
        method: "POST",     // The HTTP method for the request, POST means to send data to the API
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)    // The data to be sent as the request payload. It takes the transient state and makes it into a string
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)   // Sends a fetch request to the url passing postOptions as a second argument making it a POST request
    // This sends the stringified transient state to the api, under orders, making it permanent state
    
    const customEvent = new CustomEvent("newOrderPlaced")   // Creates a new event that has the paramter newOrderPlaced
    document.dispatchEvent(customEvent)     // Dispatches or broadcasts the custom event to the document so it can be used
}

