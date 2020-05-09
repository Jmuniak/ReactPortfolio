import React from 'react';
import './PortfolioCard.css';

// take the array and loop over each item. 
// from each item create a <li>ele</li> and add that to the newList
// 

function PortfolioCard(props) {
    let newList = [...props.builtWith];
    console.log('newList', newList);
    // console.log('props.builtWith', props.builtWith)
    let builtList = [];
    newList.map(ele => {
        builtList.push(<li key={ele.id}>{ele}</li>);
    });
    console.log(builtList);



    return (
        <div className="portfolio-card">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.url} target="blank">{props.url}</a>

        {/* not working */}
            {/* <div className="image" style={{backgroundImage: `url(${require("./../../assets/images/stayAlive.png")})`}}>Î </div> */}
            <p>Built With: </p>
            <ul id="builtWithUL">
                {builtList}
            </ul>
        </div >
    )
};

export default PortfolioCard;