
const LoginScreen = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="shadow border rounded">
                <div className="p-3">
                    <h4 className="mt-2 mb-2">Sign-in to get started!</h4>
                    <label htmlFor="emailInput">Email:</label>
                    <input id="emailInput" type="email" placeholder="you@email.com"
                           className="form-control rounded-pill"></input>
                    <label htmlFor="pwInput">Password:</label>
                    <input id="pwInput" type="password" placeholder="password"
                           className="form-control rounded-pill"></input>
                    <span>
                        <button className="btn btn-primary rounded-pill m-2 float-start">Login</button>
                        <button className="btn btn-primary rounded-pill m-2 float-end">Sign-Up</button>
                    </span>

                </div>
            </div>
        </div>
    );
}

export default LoginScreen;