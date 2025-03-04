import { Outlet, Link } from "react-router-dom";


// Nested Routes {Child Routes}
const Layout = () => {
  return (
    <>
      <nav style={{backgroundColor: "grey", padding: "10px"}}>
        <ul style={{listStyle: "none", display: "flex", justifyContent: "space-around", fontSize: "25px"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

    <div style={{backgroundColor: "grey", height: "50vh", display: "flex"}}>
      <div style={{display: "flex", flexDirection: "column", fontWeight: "bold", fontSize: '25px', margin: '5px'}}>
        <a href="">Profile</a>
        <a href="">Settings</a>
        <a href="">Calender</a>
      </div>
      <Outlet/>
    </div>

      <footer style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", backgroundColor: "lavender"}}>
        <h2 style={{backgroundColor: "lightblue", fontStyle: "italic", padding: "20px", borderRadius: "20px"}}>Logo</h2>
        <p>This is the footer</p>
        <p><i>All rights reserved, &copy; 2024.</i></p>
  
    </footer>
    </>
  )
};

export default Layout;