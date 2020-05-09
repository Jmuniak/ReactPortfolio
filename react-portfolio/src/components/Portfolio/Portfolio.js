import React from 'react';
import './Portfolio.css';
import PortfolioCard from './PortfolioCard';
import projectData from './ProjectData';


function Portfolio() {
    const projectComponents = projectData.map(project => <PortfolioCard key={project.id} name={project.name} builtWith={project.builtWith}/>)

    return (
        <div className="portfolio-section">
            <div className="portfolio-header">
                <h1>Portfolio</h1>
            </div>

            <div className="portfolio-gallery">
              <div>
              {projectComponents}
              </div>
            </div>
        
        
        </div>
    )
};

export default Portfolio;