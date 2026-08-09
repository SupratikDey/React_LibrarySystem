import { Link } from "react-router-dom";
import "./Home.css";
import Book from "./Book";
import { StartData } from "../utils/StartData";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Romance", "Mystery"];

function Home(){
    return(
        <div>
            <div className="Heading">
                <div>
                    <h2>WELCOME TO THE LIBRARY</h2>
                    <p>Browse thousands of books across every genre.</p>
                </div>
                <div className="End">
                    <h4>Categories :</h4>
                    <div className="Category_links">
                        {categories.map((e) => (
                            <Link key={e} to={`/books/${e}`} className="category_link">{e}</Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="Popular">
                <h3>Popular Books</h3>
                <div className="Book_display">
                    {StartData.map((e) => {
                        return <Book key={e.id} {...e}></Book>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;
