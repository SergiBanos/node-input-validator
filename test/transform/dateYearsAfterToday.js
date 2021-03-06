const assert = require('assert');
const t = require('../../src/transform/transform');

describe('transform-dateYearsAfterToday-rules', function () {

    describe('#dateYearsAfterToday', function () {

        it('should return true when have options', async () => {
            const v = ['dateYearsAfterToday:3'];
            const obj = t.toObject(v);
            const match = {
                params: [{
                    'arguments': [{
                        'name': 'number of years',
                        type: 'integer',
                        'value': 3
                    }],
                    'name': 'dateYearsAfterToday',
                    'options': undefined,
                    'types': ['date'],
                }],
            };
            assert.equal(JSON.stringify(obj), JSON.stringify(match));
        });

        it('should return true when have options and is requred', async () => {
            const v = ['required', 'dateYearsAfterToday:3'];
            const obj = t.toObject(v);
            const match = {
                params: [{
                    'name': 'required',
                    'types': ['string', 'integer', 'boolean', 'date', 'number'],
                }, {
                    'arguments': [{
                        'name': 'number of years',
                        type: 'integer',
                        'value': 3
                    }],
                    'name': 'dateYearsAfterToday',
                    'options': undefined,
                    'types': ['date'],
                }],
            };
            assert.equal(JSON.stringify(obj), JSON.stringify(match));
        });

        it('should return true when the string have options', async () => {
            const stringMatch = ['dateYearsAfterToday:3'];
            const objToTransform = {
                params: [{
                    'arguments': [{
                        'name': 'number of years',
                        type: 'integer',
                        'value': 3
                    }],
                    'name': 'dateYearsAfterToday',
                    'options': undefined,
                    'types': ['date'],
                }],
            };
            const result = t.normalize(objToTransform);
            assert.equal(JSON.stringify(result), JSON.stringify(stringMatch));
        });

        it('should return true when the string have options and is requred', async () => {
            const stringMatch = ['required', 'dateYearsAfterToday:3'];
            const objToTransform = {
                params: [{
                    'name': 'required',
                    'types': ['string', 'integer', 'boolean', 'date', 'number'],
                }, {
                    'arguments': [{
                        'name': 'number of years',
                        type: 'integer',
                        'value': 3
                    }],
                    'name': 'dateYearsAfterToday',
                    'options': undefined,
                    'types': ['date'],
                }],
            };
            const result = t.normalize(objToTransform);
            assert.equal(JSON.stringify(result), JSON.stringify(stringMatch));
        });

    });
});