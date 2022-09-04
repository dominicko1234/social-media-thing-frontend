import {useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({loggedIn, handleLogin}) => {

    let navigate = useNavigate();

    return (
        <div className="p-5 flex grid pl-1/2 pr-1/2 bg-gray-100">
            <h1 className="text-xl mb-5">Login</h1>
            <input type="text" placeholder="Email..." className="shadow-sm focus:shadow-md mb-5 p-3 transition-all rounded-md focus:rounded-xl outline-none" />
            <br />
            <input type="text" placeholder="Password..." className="shadow-sm focus:shadow-md mb-5 p-3 transition-all rounded-md focus:rounded-xl outline-none" />
            <br />
            <button className="bg-gray-100 hover:bg-gray-200 pl-3 pr-3 
            pt-2 pb-2 rounded-xl shadow-sm hover:shadow-md"
            onClick={() => {handleLogin(); navigate('/')}}>Login</button>
            <br />
            <Link className='justify-center' to="/">Forgot password?</Link>
            <h1>New member? <Link to="/sign-up">Sign Up!</Link></h1>
        </div>
    );
}
 
export default Login;