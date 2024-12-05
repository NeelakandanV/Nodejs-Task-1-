import express from "express";
import { createStudent, DeleteOneStudent, getOneStudents, getStudents, updateStudents } from "../Controllers/studentController.js";



const router = express.Router();

router.post("/create", createStudent);
router.get("/getStudent", getStudents);
router.get("/getOneStudent/:id",getOneStudents);
router.put("/updateStudent/:id",updateStudents);
router.delete("/deleteStudent/:id",DeleteOneStudent);

export default router;