import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='companyLogo'>
                <Link to="/">
                    <img src="images/CA_RTX_Logo2.png" alt="Collins Aerospace Logo" />
                </Link>
            </div>
            <div className="links">
                <Link to="/breakfix">Break-Fix</Link>
                <Link to="/request">Request</Link>
            </div>
        </nav>
    );
}

export default Navbar;