const axios = require('axios')

const getSearchId  = async () => {
    try {
        const response = await axios.get('https://front-test.beta.aviasales.ru/search');
        return response.data.searchId
    } catch (error) {
        console.log(error);
    }
};

const getTicketsData = async (id) => {
    try {
        const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`);
        return response.data.tickets;
    } catch (error) {
        console.log(error) ;
    }
}
module.exports = {
    getSearchId,
    getTicketsData,
};
