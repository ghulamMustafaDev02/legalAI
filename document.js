const express = require('express');
const multer = require('multer');
const path = require('path');
const Document = require('../models/Document');
const router = express.Router();

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Upload Document Route
router.post('/', upload.single('document'), async (req, res) => {
    const document = new Document({
        filename: req.file.filename,
        filePath: req.file.path,
        uploadedBy: req.user.id, // Assuming JWT middleware is used for user identification
    });
    await document.save();
    res.status(201).json(document);
});

// List Documents Route
router.get('/', async (req, res) => {
    const documents = await Document.find().populate('uploadedBy');
    res.json(documents);
});

module.exports = router;
