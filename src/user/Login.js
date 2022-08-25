import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({loggedIn, handleLogin}) => {

    let navigate = useNavigate();

    return (
        <div className="p-5 flex justify-center">
            <h1 className="text-xl">Login</h1>
            <button className="bg-gray-100 hover:bg-gray-200 pl-3 pr-3 
            pt-2 pb-2 rounded-xl shadow-md hover:shadow-lg"
             onClick={() => {handleLogin(); navigate('/')}}>Login</button>
        </div>
    );
}
 
export default Login;