const LoginForm = () => {

    return(
        <div>
            <label className="name">email</label>
            <input type="text" required ></input>
            <label className="email">password</label>
            <input type="password" required ></input> 
            <button className="login">Login</button>
            
            

        </div>
    )
}
export default LoginForm;