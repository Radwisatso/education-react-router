import { useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate()

    function login() {
        localStorage.setItem("access_token", "fazachandrabermainbilliard")
        navigate("/")
    }
    return (
        <div>
            <p>Ini login page</p>
            <button onClick={login}>Login!!!!!</button>
        </div>
    )
}

export default Login;