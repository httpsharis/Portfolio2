const mongoose = require('mongoose');

const skillCategorySchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    items: [String]
}, { timestamps: true });

module.exports = mongoose.model('SkillCategory', skillCategorySchema);
