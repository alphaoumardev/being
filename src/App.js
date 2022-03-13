import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Author from "./components/Author";
import BlogGrid from "./components/BlogGrid";
import BlogList from "./components/BlogList";
import Category from "./components/Category";
import AllPosts from "./components/AllPosts";
import PostDetail from "./components/PostDetail";
import ScrollUp from "./components/ScrollUp";
import {Route, Routes} from "react-router-dom";
import Contact from "./components/Contact";

function App()
{
  return (
    <div className="App">
            <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/author" element={<Author/>}/>
            <Route path="/blogrid" element={<BlogGrid/>}/>
            <Route path="/bloglist" element={<BlogList/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/allposts" element={<AllPosts/>}/>
            <Route path="/post" element={<PostDetail/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <ScrollUp/>
        <Footer/>
    </div>
  );
}

export default App;
