const mongoose = require('mongoose');

// connect to MongoDB server
mongoose.connect('mongodb://localhost/shopping');

// define a schema for the collection
const mySchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// define a model for the collection
const MyModel = mongoose.model('product', mySchema);

// define a query to find a document
const query = { email: 'gokukk136@gmail.com' };

// use findOne() method to find the first document that matches the query
MyModel.findOne(query, function(err, result) {
  if (err) throw err;
  console.log(result);
});
