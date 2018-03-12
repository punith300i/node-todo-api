// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    const db = client.db('Users');
    // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(count,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').find({name:'Punith Krishna'}).toArray().then((docs)=>{
        console.log(`Users list`);
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to count the documents!',err);
    });
   
    client.close();
});