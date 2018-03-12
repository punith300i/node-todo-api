const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    const db = client.db('Users');

    // findOneAndUpdate 

    //Todos collection
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId('5aa6c5121914d9b39070a0af')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //Users collections
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5aa6c4d51914d9b39070a09c')
    }, {
        $set: {
            name: 'PK3'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    
    client.close();
});