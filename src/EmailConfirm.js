import { Link } from 'react-router-dom';

const EmailConfirm = () => {
    return (
        <div className="confirm">
            <div className="questionGroup">
                <h2>THANK YOU</h2>
                <br />
                <p>An email has been sent to the relevant team with your provided information.</p>
                <br />
            </div>
            <Link to="/">
                <div className="homeCard">
                    <h2>HOME</h2>
                </div>
            </Link>
        </div>
    );
}

export default EmailConfirm;