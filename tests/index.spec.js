const cursorHelper = require('./lib');

describe('Cursor Helper', function(){
    describe('Should Concatenate All Messages', function(){
        const initialResponse = {
            items: [
                {
                    name: "Sarah"
                },
                {
                    name: "Bill"
                }
            ],
            nextToken: 'a'
        };

        const mockApi = {
            'a':{
                name: "Ted"
            },
            'b': {
                name: "Monica"
            },
            'c': {
                name: "Molly"
            }
        };
    });
});

