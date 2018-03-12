// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to Mongo Server');
    // const db = client.db('Todos');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to Insert record',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // client.close();

    const db = client.db('Users');

    db.collection('Users').insertOne({
        name:'Punith Krishna',
        age:22,
        location:'Bangalore'
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert record!',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();
});