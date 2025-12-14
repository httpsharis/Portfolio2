/**
 * Generic Controller to handle CRUD operations for any Mongoose Model.
 * Reduces code duplication for similar entities like Projects, Experience, etc.
 */

// Get all items in a collection
exports.getAll = (Model) => async (req, res) => {
    try {
        // Sort by createdAt descending (-1) by default
        const items = await Model.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new item
exports.createOne = (Model) => async (req, res) => {
    try {
        const newItem = new Model(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an item by ID
exports.updateOne = (Model) => async (req, res) => {
    try {
        const updatedItem = await Model.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an item by ID
exports.deleteOne = (Model) => async (req, res) => {
    try {
        await Model.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
