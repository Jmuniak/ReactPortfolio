import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-section">
            <div className="about-header">
                <h1>About Me</h1>
            </div>
            <div className="about-content">
                <p>
                    My name is Jeremy Muniak, I'm a Full Stack Developer with a background as a professional
              recruiter from Portland, ME. I am passionate about Full Stack and Software Development and excited to
              start applying my education in these disciplines in a position that will allow me to continue learning and
              expanding my skills.
              </p>
                <p>
                    I have experience in technical executive talent acquisition, as well as sales, within the
                    IT industry. I'm new to Full Stack Dev but enjoy it immensely. I've found Dev work to be
                    akin to woodworking, in the sense that you're able to see your work come to life and get instant tangible
                    results through problem solving, project management, and creative thinking.
              </p>
                <p>
                    I grew up on a small island farm in Casco Bay so I love sailing and
                    the outdoors. My hobbies include; disc golfing, making cold brew, board sports, video games, wood
                    working, grilling, comedy shows, science fiction. I have built a gaming PC and have a flight simulator set
                    up at home so I can fly spaceships in Star Citizen when I have free time.
              </p>
              {/* add an image */}
            </div>
        </div>
    )
};

export default About;