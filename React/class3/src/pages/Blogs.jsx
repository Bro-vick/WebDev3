import { useNavigate } from "react-router-dom";

const Blogs = () => {

    let navigate = useNavigate();

    return (
      <>
        <h1>Blog Articles</h1>
        <button onClick={() => navigate("/contact")}>Go To Contact</button>
        <button onClick={() => navigate("/")}>Go To Home</button>
      </>
    ) 
  };
  
  export default Blogs;