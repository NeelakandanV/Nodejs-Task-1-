import Marks from "../Models/marks.js";

// Create Marks
export const createMarks = async (req, res) => {
    try {
        const marks = new Marks(req.body);
        await marks.save();
        res.status(201).json({ message: "Marks created successfully", data: marks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Get all Marks
export const getMarks = async (req, res) => {
    try {
        const marks = await Marks.find().populate('student').populate('subject');
        res.status(200).json({ message: "Marks fetched successfully", data: marks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a Mark
export const updateMarks = async (req, res) => {
    const markId = req.params.id;
    try {
        if(markId){
            const marks = await Marks.findById(markId)
            marks.marks = req.body.marks || marks.marks;
            await marks.save()
            res.status(200).json({ message: "Marks updated successfully", data: marks });
        }
        else{
            res.status(400).json({message:"Mark not found"})
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a Mark
export const DeleteMarks = async (req, res) => {
    const markId = req.params.id;
    try { 
        const marks = await Marks.findById(markId)
        if(markId && marks){
            const marks = await Marks.findByIdAndDelete(markId)
            res.status(200).json({ message: "Marks Deleted successfully", data: marks });
        }
        else{
            res.status(400).json({message:"Mark not found"})
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
