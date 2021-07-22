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
            <p className="about-me">This is where information of me goes.
                This is where information of me goes.
                This is where information of me goes.
                This is where information of me goes.
                This is where information of me goes.
                This is where information of me goes.
                This is where information of me goes.
            </p>
        </section>
    )
}
export default AboutMe;