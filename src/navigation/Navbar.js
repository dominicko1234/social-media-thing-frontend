import {Link, useNavigate} from 'react-router-dom';

const Navbar = ({loggedIn, handleLogout}) => {

    let navigate = useNavigate();

    return (
        <div className='p-5 border-gray-300 border-b-2'>
            <Link className="ml-5 mr-5 font-mono hover:text-indigo-400" to="/">Home</Link>
            <Link className="ml-5 mr-5 font-mono hover:text-indigo-400" to="/my-messages">Messages</Link>
            <button onClick={() => {handleLogout(); navigate('/sign-in')}} className="ml-5 mr-5 font-mono hover:text-indigo-400 float-right">Sign Out</button>
        </div>
    );
}
 
export default Navbar;