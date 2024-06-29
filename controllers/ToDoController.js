const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
}
module.exports.saveToDo = async (req, res) => {
    const {text} = req.body;
    await ToDoModel
        .create({text})
        .then((data) =>{
            console.log("Sucessfully added..");
            console.log(data);
            res.send(data);
        })
}
module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body;
    await ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=>res.send("Updated sucessfully"))
    .catch((err)=>console.log(err));
}
module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body;
    await ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted sucessfully"))
    .catch((err)=>console.log(err));
}
