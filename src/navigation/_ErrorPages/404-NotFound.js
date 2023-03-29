import { Link } from "react-router-dom";
import './404-NotFound.css';
import image404 from './404-NotFound.jpg';

export default function NotFound()
{
    return (
        <div className="not-found">
            <h1>Oops! Page not found!</h1>
            <img src={image404} alt="404 Error (Not Found)" />
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to='/'>Go back to homepage</Link>
        </div>
    );
}