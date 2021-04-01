import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not">
            <h2>Sorry</h2>
            <p>Page cannot be found</p>
            <Link to="/">Go back to home</Link>
        </div>
     );
}
 
export default NotFound;