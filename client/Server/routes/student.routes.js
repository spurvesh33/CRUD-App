const StudentController = require("../controllers/student.controller")
const express = require("express");
const router = express.Router();

router.get("/", StudentController.findStudents);
router.post("/", StudentController.createStudent);
router.put("/:id", StudentController.updateStudent);
router.delete("/:id", StudentController.deleteStudent);

module.exports = router;
