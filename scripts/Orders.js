export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=interior&_expand=wheels&_expand=colors&_expand=technologies&_expand=model")
    const orders = await fetchResponse.json()

    let ordersHTML = ""

    const divStringArray = orders.map(
        (order) => {

            const orderPrice = order.colors.price + order.wheels.price + order.technologies.price + order.interior.price
            const finalPrice = orderPrice * order.model.priceModifier

            return `<section>
            Order #${order.id} $${finalPrice}
            </section>`
        }
    )

    ordersHTML += divStringArray.join("")

    return ordersHTML
}