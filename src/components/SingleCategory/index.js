import React, { useState } from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';
function SingleCategory({ currentCategory }) {
    const [projects] = useState([
        {
            name: "Run Buddy",
            github: "https://github.com/ITJagraj/ITJagraj.github.io",
            tools: "HTML, CSS",
            website: "https://itjagraj.github.io/"
        },
        {
            name: "Code-refactor",
            github: "https://github.com/ITJagraj/Code-refactor",
            tools: "HTML, CSS",
        },
        {
            name: "Note-taker",
            github: "https://github.com/ITJagraj/Note-taker",
            tools: "HTML, CSS, JavaScript, heroku",
        },
        {
            name: "Weather app",
            github: "https://github.com/ITJagraj/weather-dashboard",
            tools: "HTML, CSS, JavaScript",
            website: "https://itjagraj.github.io/weather-dashboard/"
        },
        {
            name: "Employer Tracker",
            github: "https://github.com/ITJagraj/employee-tracker",
            tools: "NodeJs, Inquirer, JavaScript",
        },
    ]);
    const [currentProject, setCurrentProject] = useState(projects[0]);
    const { name } = currentCategory;
    switch (name) {
        case 'About me':
            return <AboutMe></AboutMe>
        case 'Portfolio':
            return <Portfolio projects={projects} currentProject={currentProject} setCurrentProject={setCurrentProject}></Portfolio>
        case 'Contact':
            return <Contact></Contact>
        default:
            return <Resume></Resume>
    }
}
export default SingleCategory;