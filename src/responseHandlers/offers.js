const queryBuilder = require('../helpers/queryBuilder');
const axios = require('axios');
const config = require('../../config');

/**
 * @desc fetches offers data from expedia api
 */
const offers = filters => new Promise((resolve, reject) => {
    axios.get(`${config.expedia.endpoint}&${queryBuilder(filters)}`)
        .then(response => {
            if (response.status == 200) {
                resolve(response.data)
            }
            
            reject({ statusCode: response.status, message: 'something went wrong!' });
        });
});

module.exports = offers;