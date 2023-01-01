import { Link } from 'react-router-dom';
import './Searchresults.css';

export function Resulttable(props) {
    const results = props.results
    const body = results.searchResults["Response"] === "False"? <h2>Nothing found</h2> : results.searchResults["Search"].map((item, index) => {
        return (
            <div key={index} >
                <Link to={"/moviepage?id="+item["imdbID"]} className='movie-item'>
                    <img src={item["Poster"]} alt="movie-poster" />
                    <h4>{item["Title"]}</h4>
                </Link>
            </div>
        );
    })
    return (
        <div className='result-table'>
            <div id='movie-grid'>
                {body}
            </div>
        </div>
    );
}