import { Link } from "react-router-dom";
import { StartData } from "../utils/StartData";
import Book from "./Book";

function Start() {
    let data = StartData;
    return (
        <div>
            <h1>WELCOME TO THE LIBRARY</h1>
            <h2>Some Very Popular Books Amongst readers</h2>
            {data.map((e) => {
                return <Book key={e.id} {...e}></Book>
            })}
            
        </div>
    );
}

export default Start;