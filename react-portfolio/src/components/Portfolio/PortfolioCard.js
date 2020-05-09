import React from 'react';
import './PortfolioCard.css';

function PortfolioCard(props) {
    return (
        <div className="portfolio-card">
            <img src={props.project.imgUrl} />
            <h3 href="{props.project.url}" target="blank">{props.project.name}</h3>
            <p></p>

        </div>
    )
};

export default PortfolioCard;