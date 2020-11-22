// fetch express before using it
const express= require('express'); 

// use express
const router= express.Router();

// guide the router to extract the corresponding controller file
const homeController= require('../controllers/home_controller');

// checking if the file has been loaded
console.log('router loaded');

//carrying out the deleteion task by linking the suitable router with the corresponding function from the controller file
router.post('/delete-task', homeController.del);

//exporting the acquired function for use
module.exports= router;