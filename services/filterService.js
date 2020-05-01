const filterTickets = (arr) => {
    const filteredByPrice = arr.sort((a, b) => {b.price - a.price})
    console.log(filteredByPrice)
    return filteredByPrice;
}
module.exports = {
    filterTickets
}
