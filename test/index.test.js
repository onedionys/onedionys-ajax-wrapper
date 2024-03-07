const assert = require('assert');
const ajaxWrapper = require('../src/ajaxWrapper');

describe('Ajax Wrapper', function() {
    it('should send a GET request and resolve the promise with response data', function() {
        return ajaxWrapper('https://jsonplaceholder.typicode.com/posts/1', 'GET')
            .then(response => {
                // Check if response is not empty
                assert.ok(response);
                console.log('GET Response:', response);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    it('should send a POST request and resolve the promise with response data', function() {
        const postData = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        return ajaxWrapper('https://jsonplaceholder.typicode.com/posts', 'POST', postData)
            .then(response => {
                // Check if response is not empty
                assert.ok(response);
                console.log('POST Response:', response);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
