import { useState , useEffect} from "react";
import { Items } from "../utils/MockData";
import Book from "./Book";
import "./Home.css";

function BookList({Category}){

    const [Search , SetSearch] = useState("");
    const [Filter , Setfilter] = useState(Items);
    const [cato,Setcato] = useState("");

    function Handlegenre(){
        const result = Items.filter((e)=>{
            return (e.genre.toLowerCase().includes(cato.toLowerCase()));            
        })

        const result1 = result.filter((e)=>{
             return (e.title.toLowerCase().includes(Search.toLowerCase()));            
         })

        Setfilter(result1);
    }

    // function handleSearch(){
    //     const result = Items.filter((e)=>{
    //         return (e.title.toLowerCase().includes(Search.toLowerCase()));            
    //     })
    //     Setfilter(result);
    // }
    useEffect(() => {
        const result = Items.filter((e) => {
            return e.genre.toLowerCase().includes(Category.toLowerCase());
        });

        Setfilter(result);
    }, [Category]);

    return(
        <div>
            <div className="Search">
                <h3>Search for books : </h3>
                <input type="text" onChange={(e)=>SetSearch(e.target.value)}></input>
                <button onClick={()=>{Handlegenre()}}> Search </button>
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