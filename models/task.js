// fetch mongoose before using it for defining the schema
const mongoose= require('mongoose');

// schema is used to define the database key-value prototypes
const taskSchema= new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    due: {
        type: String
        // we could use date type here as well but in my code i prefered to work with string for due date
    }
});

// assigning value to the Task attribute being accessed in the index.js file
const Task= mongoose.model('Task', taskSchema);

//exporting the acquired information ofr further use
module.exports= Task;