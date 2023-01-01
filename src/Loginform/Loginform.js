import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logIn } from '../Features/userslice';
import './Loginform.css';

export function Loginform(props){
    const [input, setInput] = useState("");
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleInput = ({target}) => {
        setInput(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn(input));
    }
    return (
        <form id='loginform' onSubmit={handleSubmit}>
            {user.logged && <Navigate to="/micuenta" replace={true} />}
            <h3>Create a name</h3>
            <input type="text" value={input} onChange={handleInput} />
            <input type="submit" value="Log in" />
        </form>
    );
}