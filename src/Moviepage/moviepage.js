import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../Features/Loader";
import { getMovieInfo } from "./movieSlice";
import "./Moviepage.css"
import { addItem, removeItem } from "../Movielist/ListSlice";

export function Moviepage(props) {
    const [search] = useSearchParams();
    const navigate = useNavigate();
    const movie = useSelector(state => state.movie);
    const user = useSelector(state => state.user);
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    const [bookmark, setBookmark] = useState(false);
    useEffect(() => {
        dispatch(getMovieInfo(search.get("id")));
        let check = list.find(item => {
            return item.id === search.get("id");
        })
        if (check) setBookmark(true);
    },[dispatch, search, list]);

    const handleAdd = () => {
        if (user.logged) {
            setBookmark(prev => !prev);
            if (!bookmark) {
                dispatch(addItem({
                    id: search.get("id"),
                    title: movie.movieData["Title"],
                    poster: movie.movieData["Poster"]
                }))
            } else {
                dispatch(removeItem(search.get("id")));
            }
        } else {
            navigate("/login", { replace: true });
        }
    }
    return (
        <div >
            {movie.movieLoading && <Loader />}
            {movie.movieError && <h2>Error!!!</h2>}
            {(!movie.movieLoading && !movie.movieError) && (
                <div id="movie-page">
                    <div style={{display: "flex", alignItems : "center", gap : "1rem"}}>
                        <button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back_ios</button>
                        <h2>{movie.movieData["Title"]}</h2>
                    </div>
                    <div id="movie-info">
                        <img src={movie.movieData["Poster"]} alt={movie.movieData["Title"]} />
                        <div>
                            <h3>Plot</h3>
                            <p style={{ width: "40vw" }}>{movie.movieData["Plot"]}</p>
                            <h4>Year: {movie.movieData["Year"]}</h4>
                            <h4>Runtime: {movie.movieData["Runtime"]}</h4>
                            <button onClick={handleAdd} className="bookmark material-symbols-outlined" style={bookmark ? { backgroundColor: "gold" } : undefined}>
                                {bookmark ? "bookmark_added" : "bookmark_add"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}