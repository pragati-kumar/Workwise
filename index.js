
//we need to ensure that express is not overriden in the code. Hence, we use const to fix it.
const express= require('express');
const path= require('path');
const port= 8000;

const db= require('./config/mongoose');

const Task= require('./models/task');
const app= express(); //we have called the express function to fire it up

//initializing router
const router = express.Router();

app.set('view engine', 'ejs'); //used to notify express that ejs will be the view engine in use
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded()); //using a middleware
app.use(express.static('assets')); 

app.use("/", require("./routes"));

var taskData= [
    {
        description: "Finsish module-1 of Python",
        category: "Coding",
        due: "2020-06-01"
    },
    {
        description: "Practice E minor and F#",
        category: "Personal",
    }
]

app.get('/', function(req ,res){


    Task.find({}, function(err, taskData){
        if(err)
        {console.log('Error in fetching the tasks'); return;}

        return res.render('home', {
            title: "My To-Do-List",
            tasks: taskData
        });
    })

});

app.get('/practice', function(req ,res){

    return res.render('practice', {
        title: "My Practice Page"
    });
});

app.post('/task-add', function(req, res){
    Task.create({
        description: req.body.description,
        category: req.body.category,
        due: req.body.due
    }, function(err, newTask){
        if(err)
        {console.log('Error in creating a task'); return;}

        console.log('********', newTask);
        return res.redirect('back');
        
    });

});


app.get('/delete-task', function(req, res){

    // let id= req.query.id;
    // Task.findByIdAndDelete()
    // console.log(req.checked.params);
    // let id= req.params.checked.id;

   
});

// command+question mark


//After setting up and using the libraries we need to setuo the server using the following code-
app.listen(port, function(err){
    if(err)
    { console.log("Error in running the server!!", err);
      return; }

    console.log("My server is up and running! The port in use is: ", port);
});