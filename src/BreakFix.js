import { Link } from 'react-router-dom';

const BreakFix = () => {
    return (
        <div className="breakFix">
            <div className="questionGroup">
                <h2>IS IT A HARDWARE OR SOFTWARE PROBLEM?</h2>
                <br />
                {/* <p>question explanation</p> */}
            </div>
            <Link to="/Form/1">
                <div className="leftCard">
                    <h2>HARDWARE</h2>
                    <p>Computer Equipment and Peripherals</p>
                </div>
            </Link>
            <Link to="/Form/2">
                <div className="rightCard">
                    <h2>SOFTWARE</h2>
                    <p>Programmes and Accounts</p>
                </div>
            </Link>
        </div>
    );
}

export default BreakFix;