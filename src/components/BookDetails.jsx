import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";

function BookDetails(){
    const { id } = useParams();
    const books = useSelector((state) => state.books.Books);
    const book = books.find((b) => String(b.id) === id);

    if (!book) {
        return (
            <div className="Details_box">
                <h2>Book not found</h2>
                <Link to="/books" className="back_link">Back to Browse</Link>
            </div>
        );
    }

    return(
        <div className="Details_box">
            <img src={book.coverImage} height="400px" width="280px"></img>
            <div className="Details_text">
                <h1>{book.title}</h1>
                <h3>by {book.author}</h3>
                <h4>Genre : {book.genre}</h4>
                <h4>Rating : {book.rating} / 5</h4>
                <p>{book.detailedDescription || book.description}</p>
                <Link to="/books" className="back_link">&larr; Back to Browse</Link>
            </div>
        </div>
    )
}

export default BookDetails;
