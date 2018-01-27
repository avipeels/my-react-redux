import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import '../../styles/styles.scss';
const Header = ({ loading, courseCount }) => {
    return (
        <div className="navbar my-nav-bar">
                <ul className="nav navbar-nav">
                    <li>
                        <IndexLink to="/" className="white-text" activeClassName="active">Home</IndexLink>
                    </li>
                    <li>
                        <Link to="courses" className="white-text" activeClassName="active">Courses {!loading && <span className="my-badge">
                            {courseCount}</span>}</Link>
                    </li>
                    <li>
                        <Link to="about" className="white-text" activeClassName="active">About</Link>
                    </li>
                </ul>
                {loading && <LoadingDots interval={300} dots={20} />}
        </div>
    );
};
Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    courseCount: PropTypes.number
};
export default Header;