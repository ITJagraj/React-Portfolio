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
            name: "Employee-tracker",
            github: "https://github.com/ITJagraj/employee-tracker",
            tools: "MySQL2",
            website: "https://yonatanhaddish.github.io/taskmaster-pro/"
        },
        {
            name: "Note-taker",
            github: "https://github.com/ITJagraj/Note-taker",
            tools: "HTML, CSS, JavaScript, heroku",
        },
        {
            name: "Weather app",
            github: "https://github.com/yonatanhaddish/weather-app",
            tools: "HTML, CSS, JavaScript",
            website: "https://yonatanhaddish.github.io/weather-app/"
        },
        {
            name: "Robot Gladiators",
            github: "https://github.com/yonatanhaddish/robot-gladiators",
            tools: "HTML, JavaScript",
            website: "https://yonatanhaddish.github.io/robot-gladiators/"
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