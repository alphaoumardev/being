import {Link} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import {useState} from "react";
const Sliders = () =>
{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex,) =>
    {
        setIndex(selectedIndex);
    };
    return(
        <div>
            {/*Hero*/}
            <section className="hero hero-1 hero-carousel d-flex align-items-center">
                <div className="container">
                    <Carousel controls={true} fade={true} activeIndex={index}
                              nextIcon={ <i className="bi bi-chevron-right nexticon"> </i>}
                              prevIcon={ <i className="bi bi-chevron-left nexticon"> </i>}
                              onSelect={handleSelect}
                              indicatorLabels="1"
                              pause="hover"
                              keyboard={true}
                              touch={false}
                    >
                        {/*<div className="owl-carousel">*/}
                        {/* 1*/}
                        <Carousel.Item>
                            <div className="row ">
                                <div className="inner d-flex align-items-center">
                                    <div className="post">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />Fashion
                                        </Link>
                                        <h2>
                                            <Link to="post">The biggest Spring/Summer 2021 trends for men</Link>
                                        </h2>
                                        <div className="info">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>2 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="image m-auto">
                                        <Link to="post">
                                            <img src="../assets/img/blog/27.jpg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        {/*2*/}
                        <Carousel.Item>
                            <div className="row ">
                                <div className="inner d-flex align-items-center">
                                    <div className="post">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />Food
                                        </Link>
                                        <h2>
                                            <Link to="post">The Easiest loaf of Bread you'll ever bake</Link>
                                        </h2>
                                        <div className="info">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>2 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="image m-auto">
                                        <Link to="post">
                                            <img src="../assets/img/blog/4.jpg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        {/*3*/}
                        <Carousel.Item>
                            <div className="row">
                                <div className="inner d-flex align-items-center">
                                    <div className="post">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h2>
                                            <Link to="post"> How to Bring your Plants Indoors for the fall and winter</Link>
                                        </h2>
                                        <div className="info">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>2 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="image m-auto">
                                        <Link to="post">
                                            <img src="../assets/img/blog/32.jpg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        {/*</div>*/}
                    </Carousel>
                </div>
            </section>
        </div>
    )
}
export default Sliders
