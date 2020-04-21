import React from "react";
import './App.css'
import './burgerMenu.css'
import Login from "./Login";
import Register from "./Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/login">
                        <button className="App-login-button">
                            Login
                        </button>
                    </Link>

                    <Link to="/register">
                        <button className="App-login-button">
                            Register
                        </button>
                    </Link>
                </nav>

                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;