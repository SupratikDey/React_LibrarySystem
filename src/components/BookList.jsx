import { useState } from "react";
import { Items } from "../utils/MockData";
import Book from "./Book";
import "./Home.css";

function BookList(){

    const [Search , SetSearch] = useState("");
    const [Filter , Setfilter] = useState(Items);

    function handleSearch(){
        const result = Items.filter((e)=>{
            return (e.title.toLowerCase().includes(Search.toLowerCase()));            
        })
        Setfilter(result);
    }

    return(
        <div>
            <div className="Search">
                <h3>Search for books : </h3>
                <input type="text" onChange={(e)=>SetSearch(e.target.value)}></input>
                <button onClick={()=>{handleSearch()}}> Search </button>
            </div>
                <div className="Book_display">
                    {Filter.map((e) => {
                        return <Book key={e.id} {...e}></Book>
                    })}
                </div>
            
        </div>
    )
}

export default BookList;