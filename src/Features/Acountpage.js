import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logOut } from "./userslice";
import { removeAll } from "../Movielist/ListSlice";

export function Acountpage(props){
    const user = useSelector(state => state.user);
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(removeAll());
        dispatch(logOut());
    }
    return (
        <div id="login-form">
            {!user.logged && <Navigate to="/login" replace={true} /> }
            <div style={{display: "flex", alignItems: "center", gap : "1rem"}}><button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back_ios</button><h2>Acount information</h2></div>
            <div><strong>Username : </strong> {user.username}</div>
            <div><strong>Items added : </strong>{list.length}</div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}