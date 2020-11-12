import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import GodsLove from "./GodsLove"
const Photo= (props) => {
    return (
        <section>
            
            <a href = "/GodsLove">
            <img className="photoss" src={"https://idigest.gtinternational.org/api/lesson/GodsLove/cover"} alt="God's Love"></img>
            </a>
            <br/>
            <img className="photoss"src={"http://13.91.97.63/idigest/lesson/parenting/cover"} alt="God's Love"></img>
            <br/>
            <img className="photoss"src={"http://13.91.97.63/idigest/lesson/FollowMe/cover"} alt="God's Love"></img>
        </section>
    )
}


export default Photo