import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Book from "./Book";
import "./Home.css";

function BrowseBooks(){
    const { category } = useParams();
    const books = useSelector((state) => state.books.Books);
    const [search, setSearch] = useState("");

    const filtered = books.filter((book) => {
        const matchesCategory = !category || category === "All" ||
            book.genre.toLowerCase().includes(category.toLowerCase());

        const matchesSearch =
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return(
        <div>
            <div className="Heading">
                <h2>Browse Books{category && category !== "All" ? ` - ${category}` : ""}</h2>
                <Link to="/books" className="category_link">Show All</Link>
            </div>

            <div className="Search">
                <h3>Search for books : </h3>
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                ></input>
            </div>

            <div className="Book_display">
                {/* to check if empty or not */}
                {filtered.length == 0 && <p className="No_results">No books found.</p>}
                {filtered.map((e) => {
                    return <Book key={e.id} {...e}></Book>
                })}
            </div>
        </div>
    )
}

export default BrowseBooks;
