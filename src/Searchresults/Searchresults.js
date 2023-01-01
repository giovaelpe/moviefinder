import { useSelector } from "react-redux";
import "./Searchresults.css";
import Loader from '../Features/Loader';
import { Resulttable } from "./Resulttable";

export default function Searchresults(props){
    const results = useSelector(state => state.searchResult);
    return (
        <div>
            {(results.dataPending && !results.dataLoaded && !results.dataError) && <Loader/>}
            {results.dataLoaded && <Resulttable results={results}/>}
        </div>
    );
}