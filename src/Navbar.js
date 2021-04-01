import { Link }from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Blake's React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create New</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;