import "./Home.css";
import BookList from "./BookList";

function Home(){
    return(
        <div>
            <div className="Heading">
                <h2>WELCOME TO THE LIBRARY</h2>
                <div className="End">
                    <h4>Categories :</h4>
                    <select>
                        <option value="Popular">Popular</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>                
                
            </div>

            <BookList />
        </div>
        
    )
}

export default Home;