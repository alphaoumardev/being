import {Link} from "react-router-dom";
import React, { useState} from "react";
import {TextField} from "@mui/material";


    const Navbar =()=>
    {
        const [searchButton, setSearchButton] = useState(false);
        const toggleSearchButton = () =>{setSearchButton(!searchButton)}

        const closing = ()=>{setSearchButton(false)}
        if(!searchButton){setInterval(closing, 20000)}

        return (
        <div >
            <nav  className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    {/*logo*/}
                    <div className="logo">
                        <Link to="/">
                            <img src="../assets/img/logo-dark.png" alt="" className="logo-dark" />
                            <img src="../assets/img/logo-white.png" alt="" className="logo-white" />
                        </Link>
                    </div>
                    {/*navbar-collapse*/}
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav ml-auto mr-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link  dropdown-toggle" to="#" data-toggle="dropdown"> Blog </Link>
                                <ul className="dropdown-menu fade-up">
                                    <li>
                                        <Link className="dropdown-item" to="bloglist">Blog list</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="blogrid">Posts</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link  dropdown-toggle " to="#" data-toggle="dropdown"> Posts Features</Link>
                                <ul className="dropdown-menu fade-up">
                                    <li>
                                        <Link className="dropdown-item" to="post">Post Detail</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="allposts">All Posts</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="category"> Art &amp; Design </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="author"> Author </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about"> About Me </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact"> Contact </Link>
                            </li>
                        </ul>
                    </div>
                    {/*/*/}
                    {/*navbar-right*/}
                    <div className="navbar-right ml-auto">
                        <div className="social-icones">
                            <ul className="list-inline">
                                <li>
                                    <Link to="#">
                                        <i className="bi bi-facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="bi bi-instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="bi bi-twitter" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <span className="slider">
                                  <i className="bi bi-sun icon-light" />
                                  <i className="bi bi-moon icon-dark" />
                                </span>
                            </label>
                        </div>
                        <form method="get" action="">
                            <span className="search-icon">
                                <b><i onClick={toggleSearchButton} className="bi bi-search" title="Looking for something?" /></b>
                                {searchButton && <TextField  id="standard-size-small" defaultValue="" placeholder="Search" size="small" variant="standard" style={{paddingLeft:10}}/>}
                            </span>
                        </form>

                        <button   className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span  className="navbar-toggler-icon" />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
export default Navbar;
