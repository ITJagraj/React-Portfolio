import React from 'react';
function Portfolio(proppass) {
    const { projects = [] } = proppass;
    return (
        <header>
            <h2 className="h2-title">Portfolio</h2>
            <div className="grid-container">
                <div className="grid-layout">
                    {projects.map((project) => (
                        <div className="card" key={project.name}>
                            <div className={`${project.name}`}>
                                <h2><b>{project.name}</b></h2>
                                <p>{project.tools}</p>
                                <a href={project.github}>:link:</a>
                                <a href={project.website}>:computer:</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}
export default Portfolio;