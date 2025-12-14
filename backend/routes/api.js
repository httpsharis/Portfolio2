const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

// Import Models
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Certificate = require('../models/Certificate');
const SkillCategory = require('../models/SkillCategory');

// --- Helper to create standard routes for a model ---
const createCrudRoutes = (model) => {
    const crudRouter = express.Router();
    crudRouter.get('/', crudController.getAll(model));
    crudRouter.post('/', crudController.createOne(model));
    crudRouter.put('/:id', crudController.updateOne(model));
    crudRouter.delete('/:id', crudController.deleteOne(model));
    return crudRouter;
};

// --- Define Routes ---
// Mount the sub-routers
router.use('/projects', createCrudRoutes(Project));
router.use('/experience', createCrudRoutes(Experience));
router.use('/education', createCrudRoutes(Education));
router.use('/certificates', createCrudRoutes(Certificate));
router.use('/skills', createCrudRoutes(SkillCategory));

module.exports = router;
