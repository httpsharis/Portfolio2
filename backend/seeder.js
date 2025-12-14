const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import Models
const Project = require('./models/Project');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
const Certificate = require('./models/Certificate');
const SkillCategory = require('./models/SkillCategory');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

// Initial Data
const projects = [
    {
        title: "MZ Cooling Towers Website",
        desc: "A modern, responsive corporate website for MZ Cooling Tower showcasing products, services, and company information.",
        tags: ["React.js", "Tailwind CSS", "Node.js", "React-Router", "Frontend"],
        link: "https://mz-cooling-web.vercel.app/"
    },
    {
        title: "MERN Stack E-commerce",
        desc: "MERN-stack e-commerce application (MongoDB, Express, React, Node) with product browsing, user authentication, shopping cart and checkout. Includes an admin dashboard for managing products and orders.",
        tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express", "React-Router", "Backend", "Frontend"],
        link: "https://ecom-mernstack-frontend.vercel.app/"
    },
    {
        title: "E-commerce Website Frontend",
        desc: "Responsive interface with product filtering, shopping cart, and user auth UI. Optimized for mobile.",
        tags: ["React.js", "Tailwind CSS", "React-Router"],
        link: "https://ecommerce-fontend-design.vercel.app/"
    },
    {
        title: "Portfolio Website",
        desc: "Responsive portfolio with smooth animations and EmailJS integration for contact forms.",
        tags: ["React.js", "Email.JS"],
        link: "#"
    },
    {
        title: "Gym Business Website",
        desc: "Service showcase with membership plans and interactive features.",
        tags: ["React.js", "Framer Motion"],
        link: "https://ecommerce-fontend-design.vercel.app/"
    },
    {
        title: "Calculator Application",
        desc: "Functional calculator with mathematical operations and error handling.",
        tags: ["JavaScript", "HTML5", "CSS3"],
        link: "https://httpsharis.github.io/My-Calculator/"
    }
];

const experience = [
    {
        title: "Freelance Web Developer",
        company: "MZ Cooling Tower",
        location: "Remote",
        duration: "Nov 2025 – Dec 2025",
        duties: [
            "Modernized brand identity via a responsive UI/UX website redesign.",
            "Built a pixel-perfect web app using React.js and Tailwind CSS.",
            "Enhanced SEO and performance to maximize site speed.",
            "Led end-to-end development, from concept to launch."
        ],
    },
    {
        title: "Frontend Developer Intern",
        company: "Developershub.co",
        location: "Lahore, Pakistan",
        duration: "March 2025 - May 2025",
        duties: [
            "Developed responsive web applications using React.js and Tailwind CSS.",
            "Built reusable components and implemented modern UI/UX designs.",
            "Collaborated with cross-functional teams to deliver pixel-perfect frontend solutions.",
            "Optimized application performance and ensured cross-browser compatibility.",
        ],
    }
];

const education = [
    {
        degree: "Bachelor's in Computer Science",
        institution: "Minhaj University, Lahore",
        duration: "2023 - 2027 (Expected)",
    },
    {
        degree: "FSC Pre-Medical",
        institution: "Superior Group of Colleges, Khanewal",
        duration: "2020 - 2022",
    }
];

const certificates = [
    {
        title: "Pitman Certificate in English",
        issuer: "Pitman Qualifications",
    }
];

const skills = [
    {
        title: 'Frontend',
        items: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
        title: 'Backend & DB',
        items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB']
    },
    {
        title: 'Tools & Others',
        items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Context API']
    }
];

// Seeder Function
const seedDB = async () => {
    try {
        // Clear existing data
        await Project.deleteMany({});
        await Experience.deleteMany({});
        await Education.deleteMany({});
        await Certificate.deleteMany({});
        await SkillCategory.deleteMany({});

        console.log('Existing collections cleared.');

        // Insert new data
        await Project.insertMany(projects);
        await Experience.insertMany(experience);
        await Education.insertMany(education);
        await Certificate.insertMany(certificates);
        await SkillCategory.insertMany(skills);

        console.log('Data Imported Successfully!');
        process.exit();
    } catch (err) {
        console.error('Error importing data:', err);
        process.exit(1);
    }
};

seedDB();
