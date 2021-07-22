import React, { useState } from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';
function SingleCategory({ currentCategory }) {
    const [projects] = useState([
        {
            name: "Run Buddy",
            github: "https://github.com/yonatanhaddish/run-buddy",
            tools: "HTML, CSS",
            website: "https://yonatanhaddish.github.io/run-buddy/"
        },
        {
            name: "Task Master",
            github: "https://github.com/yonatanhaddish/taskmaster-pro",
            tools: "HTML, CSS, JavaScript",
            website: "https://yonatanhaddish.github.io/taskmaster-pro/"
        },
        {
            name: "Quiz app",
            github: "https://github.com/yonatanhaddish/quiz-app",
            tools: "HTML, CSS, JavaScript",
            website: "https://yonatanhaddish.github.io/quiz-app/"
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
        {
            name: "Food Festival",
            github: "https://github.com/yonatanhaddish/food-festival",
            tools: "HTML, CSS, JavaScript",
            website: "https://yonatanhaddish.github.io/food-festival/"
        }
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