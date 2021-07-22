import React from 'react';
function Resume() {
    return (
        <section>
            <h2 className="h2-title">Resume</h2>
            <div>
                <h3>Front-End</h3>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ol>
            </div>
            <div>
                <h3>Back-End</h3>
                <ol>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ol>
            </div>
        </section>
    );
}
export default Resume;