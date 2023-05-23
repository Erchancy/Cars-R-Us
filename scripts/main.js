import { ColorOptions } from './Color.js'
import { InteriorOptions } from './Interior.js'
import { ModelOptions } from './Model.js'
import { Orders } from './Orders.js'
import { OrderButton } from './PlaceOrder.js'
import { TechnologyOptions } from './Technology.js'
import { WheelOptions } from './Wheels.js'

const render = async() => {

const ColorOptionsHTML = await ColorOptions()
const InteriorOptionsHTML = await InteriorOptions()
const TechnologyOptionsHTML = await TechnologyOptions()
const WheelOptionsHTML = await WheelOptions()
const PlaceOrderButton = await OrderButton()
const OrdersHTML = await Orders()
const ModelHTML = await ModelOptions()

const composedHTML = `
${ColorOptionsHTML}
${InteriorOptionsHTML}
${TechnologyOptionsHTML}
${WheelOptionsHTML}
${ModelHTML}
${PlaceOrderButton}
${OrdersHTML}
`

container.innerHTML = composedHTML

}

document.addEventListener("newOrderPlaced", render)

render()

