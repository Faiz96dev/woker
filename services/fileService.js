const fs = require('fs')

const wrireTickets = (data, path) => {
    try {
        fs.writeFileSync('test.json', JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

const readFileTickets = () => {
    try {
        const tickets = fs.readFileSync('test.json', 'utf8');
     return tickets
    } catch (err) {
        console.log(err)
    }

}
module.exports = {
    wrireTickets,
    readFileTickets,
};
