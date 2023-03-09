const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017/';


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

console.log("connected");
});


