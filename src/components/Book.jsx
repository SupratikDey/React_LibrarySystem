import "./Home.css";

function Book(props){
    return(
        <div className="book_box">
            <img src={props.coverImage} height="300px" width="100%"></img>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
            <h4>Genre : {props.genre}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Book;