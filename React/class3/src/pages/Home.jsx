import { Link } from "react-router-dom";

const Home = () => {
    return (
            <>
                <h1>Home</h1>
                <nav style={{backgroundColor: "grey", padding: "10px"}}>
                {/* <ul style={{listStyle: "none", display: "flex", justifyContent: "space-around", fontSize: "25px"}}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul> */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe explicabo illum ut accusamus id esse ipsum quod ipsam odio consequatur quas voluptas vitae, sint repellendus dicta? Earum, nostrum quod?
                </p>
            </nav>
            </>

    )
  };
  
  export default Home;