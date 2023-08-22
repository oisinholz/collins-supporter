import { Link } from 'react-router-dom';

const Request = () => {
    return (
        <div className="request">
            <div className="questionGroup">
                <h2>ARE YOU REQUESTING NEW EQUIPMENT OR SOFTWARE/ACCESS?</h2>
                <br />
                {/* <p>question explanation</p> */}
            </div>
            <Link to="/Form/3">
                <div className="leftCard">
                    <h2>HARDWARE</h2>
                    <p>IT Purchases, Yubikeys, etc.</p>
                </div>
            </Link>
            <Link to="/Form/4">
                <div className="rightCard">
                    <h2>SOFTWARE</h2>
                    <p>Applications, Folders and Permissions</p>
                </div>
            </Link>
        </div>
    );
}

export default Request;