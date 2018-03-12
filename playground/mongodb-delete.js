// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    const db = client.db('Todos');

    // deleteMany

    db.collection('Todos').deleteMany({text:"Eat Lunch"}).then((results)=>{
        console.log(results);
    });


    // deleteOne

    db.collection('Todos').deleteOne({text:"Something to do"}).then((result)=>{
        console.log(result);
    });
    
    
    //findOneAndDelete , returns the deleted document.
    db.collection('Todos').findOneAndDelete({text:"Something to do"}).then((result)=>{
            console.log(result);
        });
   
    client.close();
});