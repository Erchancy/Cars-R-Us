import { placeOrder } from "./TransientState.js";

export const OrderButton = () => { //This function constructs the button in HTML
    
    document.addEventListener("click", handleOrderButtonClick) // This event listener invokes the handle function when a click occurs

    return "<div><button id='placeOrder'>Place Order</button></div>" //This is the HTML, it gives the button an id of "placeOrder"
    
}

const handleOrderButtonClick = (clickEvent) => { // This function takes the click event as an argument
    if (clickEvent.target.id === "placeOrder") { // This only runs if the click target id is placeOrder and then invokes the placeOrder function
            placeOrder()    // Invokes placeOrder to turn the stores transient state into permanent state
        }
    }