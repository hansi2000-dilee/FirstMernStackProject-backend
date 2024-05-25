const User = require('./model');



const getUsers = (req,res,next) =>{
  User.find()
  .then(response => {
    res.json({ response})
  })
  .catch(error => {
    res.json({ error })
  });
};

//promice ekakin data ganna mehemayi mongodb waladi


const addUsers = (req,res,next) =>{
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
    .then(response => {
      res.json({ response})
    })
    .catch(error => {
      res.json({ error })
    });

}

const updateUsers = (req,res,next) =>{
    const { id,name } = req.body;     //object distructuring
    User.updateOne({id: id } , { $set: {name: name} })
    .then(response => {
        res.json({ response})
      })
      .catch(error => {
        res.json({ error })
      });

}
const deleteUsers = (req,res,next) =>{
    const id = req.body.id;
    User.deleteOne({id: id})
    .then(response => {
        res.json({ response})
      })
      .catch(error => {
        res.json({ error })
      });

}
exports.getUsers = getUsers;
exports.addUsers = addUsers;
exports.updateUsers = updateUsers;
exports.deleteUsers = deleteUsers;  
