import './App.css';

function Header(onNavigate ) {



    return (
        <>


            <nav className="navBar">
                <ul className="nav_flex">
                    <li><button onClick={() => onNavigate('Home')}>Home</button></li>
                    <li><button onClick={() => onNavigate('About')}>About</button></li>
                    <li><button onClick={() => onNavigate('Skills')}>Skills</button></li>
                    <li><button onClick={() => onNavigate('Experience')}>Experience</button></li>
                    <li><button onClick={() => onNavigate('Contact')}>Contact me</button></li>
                </ul>
            </nav>



        </>
    );
}

export default Header;