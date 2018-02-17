const axios = require('axios');
const offers = require('../../src/responseHandlers/offers');

describe('offers', () => {
    describe('requesting expedia api', () => {
        test('with a non 200 response code should reject with the status code', () => {
            axios.get = jest.fn(() => new Promise((resolve, reject) => {
                resolve({ status: 404 });
            }));
            expect(offers({})).rejects.toEqual({ statusCode: 404, message: 'something went wrong!' });
        });

        test('with a 200 response code should resolve with the offers', () => {
            axios.get = jest.fn(() => new Promise((resolve, reject) => {
                resolve({ status: 200, data: { foo: 'bar' } });
            }));
            expect(offers({})).resolves.toEqual({ foo: 'bar' });
        });
    });
});