// here del is the name of the object and the deletion of a single task is being carried out

module.exports.del= function(req, res){
    let id= req.params.id;
    console.log('Deleted id is: ', id);


    Task.findByIdAndDelete(id, function (err) {
    if(err)
    { console.log('Error in task deletion!'); return;}

    return res.redirect('back');
    });
}

