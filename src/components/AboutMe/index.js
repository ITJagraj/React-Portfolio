import React from 'react';
function AboutMe() {
    return (
        <section>
            <div>
                <h2 className="h2-title">About Me</h2>
            </div>
            {/* <img
                // src={require(`../../assets/profile/profilephoto.jpg`).default}
                alt="profile"
                className="img-thumbnail mx-1"
                key="profile" /> */}
            <p className="about-me">My name is Jagraj and I am a full stack developer. Currently living in canada and I am open to work with projects.
            </p>
        </section>
    )
}
export default AboutMe;