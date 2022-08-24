import {useEffect} from 'react';

const Login = ({loggedIn, handleLogin}) => {

    useEffect(() => {
        console.log(typeof handleLogin)
    })

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    );
}
 
export default Login;