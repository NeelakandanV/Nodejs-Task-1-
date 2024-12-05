import express from "express";
import { createMarks, DeleteMarks, getMarks, updateMarks } from "../Controllers/marksController.js";
import { reportCardGenerator } from "../Utils/reportCardGenerator.js";

const router = express.Router();

router.post("/create", createMarks);
router.get("/getMarks", getMarks);
router.put("/updateMarks/:id",updateMarks);
router.delete("/deleteMark/:id",DeleteMarks)


// Id - Student Id
router.get("/generateReport/:id",reportCardGenerator)

export default router;