import React from 'react';
import './Portfolio.css';
import PortfolioCard from './PortfolioCard';

function Portfolio() {
    return (
        <div className="portfolio-section">

            <div className="portfolio-header">
                <h1>Portfolio</h1>
            </div>

            <div className="portfolio-gallery">



                <div className="proj-gal-item">
                    <a className="portfolioLink" href="https://stay-alive-critical-code.herokuapp.com/"
                        target="blank">Stay Alive</a>
                    <img className="project-stayAlive">
                    </img>
                    <div className="project-info">
                        <p>Built with:</p>
                        <ul>
                            <li>VS Code</li>
                            <li>React</li>
                            <li>Reactstrap</li>
                            <li>NPM react-chartjs-2</li>
                            <li>Nodemon</li>
                            <li>NPM axios</li>
                            <li>NPM sequelize</li>
                            <li>NPM express</li>
                            <li>NPM mysql2</li>
                        </ul>
                    </div>
                </div>

                <div className="project-div"></div>
                <div className="project-div"></div>
                <div className="project-div"></div>
                <div className="project-div"></div>
            </div>
        </div>
    )
};

export default Portfolio;