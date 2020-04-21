import React, {useState} from "react";
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('https://ie2020.kisim.eu.org/api/users',{email,password})
            .then(res=>{
               alert("Response status: "+res.status+"\nToken: "+res.data.toString())
            })
            .catch(error=>{
                alert("Error: "+error.response.toString())
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="text" name="email" onChange={e => setEmail(e.target.value)}/>
                </label><br/>
                <label>
                    Password:
                    <input type="text" name="password" onChange={event => setPassword(event.target.value)}/>
                </label><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;