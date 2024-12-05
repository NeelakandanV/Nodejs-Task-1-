import Student from "../Models/student.js";
import Marks from "../Models/marks.js";

// Creating a Student
export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({message: "Student created successfully", data:student});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Getting all Students
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({message: "Students fetched successfully", data:students});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Getting a Particular student
export const getOneStudents = async (req, res) => {
    const StudId = req.params.id;
    try {
        const students = await Student.findById(StudId);
        if(students){
            res.status(200).json({message: "Students fetched successfully", data:students});
        }
        else{
            res.status(401).json({message:"Student not found"})
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Updating a Student
export const updateStudents = async (req, res) => {
    const StudId = req.params.id;
    try {
        const students = await Student.findById(StudId);
        if(students){
            students.name = req.body.name || students.name
            students.age = req.body.age || students.age
            students.rollNumber = req.body.rollNumber || students.rollNumber
            await students.save()
            res.status(200).json({message: "Students updated successfully", data:students});
        }
        else{
            res.status(401).json({message:"Student not found"})
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Deletin a Students with their marks
export const DeleteOneStudent = async (req, res) => {
    const StudId = req.params.id;
    try {
        const students = await Student.findById(StudId);
        if(students){
            const stud = await Student.findByIdAndDelete(StudId);
            const marks = await Marks.deleteMany({student:StudId})
            res.status(200).json({message: "Students deleted successfully", data:students});
        }
        else{
            res.status(401).json({message:"Student not found"})
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}