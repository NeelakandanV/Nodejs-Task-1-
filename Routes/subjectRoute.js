import express from "express";
import { createSubject, DeleteSubject, getOneSubject, getSubjects, updateSubject } from "../Controllers/subjectController.js";


const router = express.Router();

router.post("/create", createSubject);
router.get("/getSubject", getSubjects);
router.get("/getOneSubject/:id",getOneSubject);
router.put("/updateSubject/:id",updateSubject);
router.delete("/deleteSubject/:id",DeleteSubject)

export default router;