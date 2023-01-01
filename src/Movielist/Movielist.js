import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeItem } from "./ListSlice";

export function Movielist(props){
    const list = useSelector(state => state.list);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const body = list.map((item, index) => {
        return <div key={index} style={{ display : "flex", flexDirection : "column", alignItems : "flex-start", width: "40vw", margin : "0 auto", marginTop: "1rem" }}>
            <div style={{display: "flex", alignItems: "center", gap: "0.6rem", justifyContent: "space-between"}}>
            <img src={item.poster} style={{width : "3rem"}} />
            <strong>{item.title}</strong>
            <button className="material-symbols-outlined" onClick={() => {
                dispatch(removeItem(item.id));
            }}>delete</button>
            </div>
        </div>
    });
    return (
        <div>
            {!user.logged && <Navigate to="/login" replace={true} />}
            <h2 style={{textAlign: "center"}}>Things to watch</h2>
            {body}
        </div>
    );
}