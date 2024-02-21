const Alumni = require('../models/Alumni');

exports.createAlumni = async (req, res) => {
  try {
    const alumniData = req.body;
    const newAlumni = new Alumni(alumniData);
    const savedAlumni = await newAlumni.save();
    res.status(201).json(savedAlumni);
  } catch (error) {
    console.error('Error creating Alumni:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// {
//     "image":"https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_1280.jpg",
//     "name": "John Doe",
//     "age": 18,
//     "title": "Software Engineer",
//     "description": "John Doe is a skilled software engineer with expertise in web development."
//   }
  
exports.getAllAlumni = async (req, res) => {
  try {
    const alumniList = await Alumni.find();
    res.json(alumniList);
  } catch (error) {
    console.error('Error getting Alumni:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAlumniById = async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id);
    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json(alumni);
  } catch (error) {
    console.error('Error getting Alumni by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.updateAlumniById = async (req, res) => {
  try {
    const updatedAlumni = await Alumni.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAlumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json(updatedAlumni);
  } catch (error) {
    console.error('Error updating Alumni:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.deleteAlumniById = async (req, res) => {
  try {
    const deletedAlumni = await Alumni.findByIdAndDelete(req.params.id);
    if (!deletedAlumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json({ message: 'Alumni deleted successfully' });
  } catch (error) {
    console.error('Error deleting Alumni:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
