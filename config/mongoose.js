//require and obtain the library
const mongoose= require('mongoose');

//connect to the db
mongoose.connect('mongodb://localhost/tasksdb');

// acquire the connection to the db and gain access
const db= mongoose.connection;

//error
db.on('error', console.error.bind('error connecting to db'));

//success
db.once('open', function(){
    console.log('Successfully connected to the db!!');
});