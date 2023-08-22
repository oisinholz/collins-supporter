import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">
            <div className="questionGroup">
                <h2>SELECT THE TYPE OF PROBLEM YOU ARE HAVING</h2>
                <br />
                {/* <p>question explanation</p> */}
            </div>
            <Link to="/breakfix">
                <div className="leftCard">
                    <h2>BREAK-FIX</h2>
                    <p>Something Isn't Working Properly</p>
                </div>
            </Link>
            <Link to="/request">
                <div className="rightCard">
                    <h2>REQUEST</h2>
                    <p>Something Is Needed</p>
                </div>
            </Link>
        </div>
    );
}

export default Home;