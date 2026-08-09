import "./Home.css";
import BookList from "./BookList";
import { useState } from "react";

function Home(){
    const [category, setCategory] = useState("");
    return(
        <div>
            <div className="Heading">
                <h2>WELCOME TO THE LIBRARY</h2>
                <div className="End">
                    <h4>Categories :</h4>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>                
                
            </div>

            <BookList Category={category} />
        </div>
        
    )
}

export default Home;