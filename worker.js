const apiService = require("./services/apiService");
const fileService = require("./services/fileService");
const filterService = require("./services/filterService");

async function Worker() {
    try {
        const id = await apiService.getSearchId()
        const ticket = await apiService.getTicketsData(id)
        fileService.wrireTickets(ticket, '')
        const tickets = await fileService.readFileTickets()
        const filtered = filterService.filterTickets(tickets)
        console.log(filtered)
    } catch (error) {
        console.log(error)
    }
}

Worker()




