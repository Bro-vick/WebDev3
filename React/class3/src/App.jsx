import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Dashboard from "./pages/Dashboard";

function User (){
  let { id } = useParams();
  return <h2>Current User ID: {id}  </h2>
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/user/:id" element={<User />}/>
        </Route>
        {/* <Route path="/" index element={<Home />}/>
        <Route path="blogs" element={<Blogs />}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage />}/> */}

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<h3>Profile Page</h3>}/>
          <Route path="settings" element={<h3>Settings Page</h3>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// React Router is a popular routing library for React that enables navigation between different views or pages in a Single Page Application (SPA).
//  Installation
// For React projects using Vite, install React Router with:
// npm install react-router-dom
//  Explanation:
// Router (or BrowserRouter) wraps the app to enable routing.
// Routes is a container for multiple Route elements.
// Route defines a path and the corresponding component.
// Link provides navigation without full-page reload.

// Dynamic Routes: We can use URL parameters to pass dynamic values
