const studentModel = require("../models/student.model")


function findStudents(req, res) {
    studentModel.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((e) => res.status(500).json({ messahe: e.message }));
  }

  function createStudent(req , res) {
    studentModel.create(req.body)
    .then((data) =>  res.status(200).json(data))
    .catch((e) => res.status(500).json({ message: e.message }));
    
  }

  function updateStudent(req , res) {
    studentModel.findByIdAndUpdate(req.params.id,req.body , {new : true})
    .then((data) => res.status(200).json({data}))
    .catch((e) => res.status(500).json({ message: e.message }));
    
  }

  function deleteStudent(req , res) {
    studentModel.findByIdAndDelete(req.params.id,req.body , {new : true})
    .then((data) => res.status(200).json({data}))
    .catch((e) => res.status(500).json({ message: e.message }));
    
  }


module.exports = {findStudents,createStudent , updateStudent ,deleteStudent};