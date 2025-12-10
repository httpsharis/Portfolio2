import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/features/Hero';
import ProjectList from '../components/features/ProjectList';
import Skills from '../components/features/Skills';
import Experience from '../components/features/Experience';
import Education from '../components/features/Education';
import Contact from '../components/features/Contact';

/**
 * Home page component.
 * Assembles all the main sections of the portfolio.
 */
export default function Home() {
    return (
        <MainLayout>
            <Helmet>
                <title>Muhammad Haris | MERN Stack Developer</title>
                <meta name="description" content="Portfolio of Muhammad Haris, a MERN Stack Developer specializing in React, Node.js, and modern web technologies." />
            </Helmet>

            <Hero />
            <ProjectList />
            <Skills />
            <Experience />
            <Education />
            <Contact />
        </MainLayout>
    );
}
