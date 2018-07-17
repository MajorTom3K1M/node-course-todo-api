const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove().then();
// Todo.findById().then();

Todo.findOneAndRemove({_id: '5b4dd870761772e2a8332d0d'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('5b4dd870761772e2a8332d0d').then((todo) => {
//   console.log(todo);
// });
