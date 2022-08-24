import {Link} from 'react-router-dom';

const Navbar = ({loggedIn, setLoggedIn}) => {

    return (
        <div className='p-5 border-gray-300 border-b-2'>
            <Link className="ml-5 mr-5 font-mono hover:text-indigo-400" to="/">Home</Link>
            <Link className="ml-5 mr-5 font-mono hover:text-indigo-400" to="/my-messages">Messages</Link>
            <button onClick={() => setLoggedIn(false)} className="ml-5 mr-5 font-mono hover:text-indigo-400 float-right">Sign Out</button>
        </div>
    );
}
 
export default Navbar;