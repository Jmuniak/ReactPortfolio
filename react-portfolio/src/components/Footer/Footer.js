import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <div className="container">
            <div row>
                <div col>
                    <ul list-unstyled>
                        <li>Web App</li>
                        <li>Full Stack Web Development</li>
                    </ul>
                </div>
                <div col>
                    <ul list-unstyled>
                        <li><a href="www.linkedin.com/in/jeremy-muniak/" target="blank">LinkedIn</a></li>
                        <li><a href="https://github.com/Jmuniak" target="blank">GitHub</a></li>
                        <li><a href="./images/Jeremy Muniak Full Stack 2020.pdf" target="blank">Resume</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )

};

export default Footer;