import "./Home.css";

function Home(){
    return(
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
    )
}

export default Home;