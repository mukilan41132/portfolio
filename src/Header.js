import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-router-dom';
import Skills from './Skills';
function Header() {



    return (
        <>


            <Router>
                <>
                    <nav className="navBar">
                        <ul className="nav_flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/Skills">Skills</Link></li>
                            <li><Link to="/experience">Experience</Link></li>
                            <li><Link to="/contact">Contact me</Link></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/Skills">
                            <Skills />
                        </Route>
                        {/* Define other routes here */}
                    </Switch>
                </>
            </Router>


        </>
    );
}

export default Header;