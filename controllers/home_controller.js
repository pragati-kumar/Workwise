// here del is the name of the object and the deletion of a single task is being carried out
const Task=require('../models/task');


module.exports.del= function(req,res){
    let id= req.body.display;
    console.log(id);


    Task.findByIdAndDelete(id, function (err) {
    if(err)
    { console.log('Error in task deletion!',err); 
      return;}

    return res.redirect('back');
    });
}

