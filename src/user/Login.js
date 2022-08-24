const Login = ({loggedIn, handleLogin}) => {

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
 
export default Login;