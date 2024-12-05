import Subject from "../Models/subject.js";

// Creating a Subject
export const createSubject = async (req, res) => {
    try {
        const subject = new Subject(req.body);
        await subject.save();
        res.status(201).json({ message: "Subject created successfully", data: subject });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Getting all Subjects
export const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json({ message: "Subjects fetched successfully", data: subjects });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Getting a Particular Subject
export const getOneSubject = async (req, res) => {
    const SubId = req.params.id;
    try {
        const subjects = await Subject.findById(SubId);
        if(subjects){
            res.status(200).json({message: "Subject fetched successfully", data:subjects});
        }
        else{
            res.status(401).json({message:"Subject not found"})
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Updating a Subject
export const updateSubject = async (req, res) => {
    const SubId = req.params.id;
    try {
        const subjects = await Subject.findById(SubId);
        if(subjects){
            subjects.name = req.body.name || subjects.name
            await subjects.save()
            res.status(200).json({message: "Subject updated successfully", data:subjects});
        }
        else{
            res.status(401).json({message:"Subject not found"})
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Deletin a Subject
export const DeleteSubject = async (req, res) => {
    const SubId = req.params.id;
    try {
        const subjects = await Subject.findById(SubId)
        if(subjects){
            const subj = await Subject.findByIdAndDelete(SubId);
            res.status(200).json({message: "Subject deleted successfully", data:subjects});
        }
        else{
            res.status(401).json({message:"Subject not found"})
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}