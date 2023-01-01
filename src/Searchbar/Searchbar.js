import { useDispatch, useSelector } from "react-redux";
import "./Searchbar.css"
import { typing } from "./Searchslice";
import { movieSearch } from "../Searchresults/Resultslice";

export function Searchbar(props){
    const dispatch = useDispatch();
    const search = useSelector(state => state.search);
    const handleType = ({target}) => {
        dispatch(typing(target.value));

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(movieSearch(search));
    }
    return (
        <form className="searchform" onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleType} />
            <input type="submit" value="search" className="material-symbols-outlined" />
        </form>
    );
}