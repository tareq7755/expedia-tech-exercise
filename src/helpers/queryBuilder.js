/**
 * @desc Builds a query string from filters 
 * @param {*} params 
 */
const queryBuilder = params => {
    if(!params || typeof params !== 'object') {
        return "";
    }

    query = [];

    for(key in params) {
        if(params[key]) {
            query.push(`${key}=${params[key]}`);
        }
    }

    return query.length ? query.join('&') : '';
}

module.exports = queryBuilder;