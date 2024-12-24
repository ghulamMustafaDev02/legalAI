const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    filePath: { type: String, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Document', documentSchema);
