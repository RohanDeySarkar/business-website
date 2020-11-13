import React from 'react';
import './Home.css';

import Navbar from './Navbar';

import {Carousel} from 'react-bootstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

function Home() {

    const carouselItems = [
        {
            image: require("./images/35.jpg"),
            des: "display cabinets"
        },
        {
            image: require("./images/36.jpg"),
            des: "basin counter"
        },
        {
            image: require("./images/3.jpg"),
            des: "crockery unit"
        },
        {
            image: require("./images/25.jpg"),
            des: "panel art"
        },
        {
            image: require("./images/33.jpg"),
            des: "showroom counter"
        }
    ];

    return (
        <div className="home">
            <div className="header">
                <div className="header__left">
                    <Navbar /> 
                    <h2>Home</h2> 
                </div>

                <div className="header__right">
                    <h2>ti-interior hub</h2>
                </div>
            </div>

            <div className="home__body">
                <div className="home__bodyCarousel">
                    <Carousel className="carousel">
                        {carouselItems.map((item) => (
                            <Carousel.Item>
                                <div className="carousel__background" 
                                    style={{backgroundImage: `url(${item.image})`}}
                                >
                                    <div className="carousel__item">
                                        <img 
                                            className="carousel__image" 
                                            src={item.image}
                                            alt=""
                                        />
                                        <p>{item.des}</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <hr />

               <div className="home__bodyCards">
                   <div className="home__bodyCard">
                        <div className="home__bodyCardTitle">
                                <p>
                                    We are Interior designers with an aim of better creative perception of Indian interior design industry.
                                    Ti Interior Hub engage itself with sustainable material, techniques and intelligently 
                                    added eco friendly local made items  to create the most effective, functional and reasonable budget fit products for residential and commercial interiors.
                                </p>
                        </div>
                        <div className="home__bodyCardImage">
                                <img src={require("./images/29.jpg")} alt=""/>
                        </div>
                   </div>
                   {/* <hr /> */}
                   <div className="home__bodyCard--text">
                        <h1>What We Do</h1>
                        <div className="home__bodyCard--textField">
                            <div className="home__bodyCard--textLeft">
                                <p>
                                    We are expertise in AutoCAD planning, 3d interior designing and making quality customized
                                    furniture, handmade desi home decor products.
                                    Our skilled - experienced team service for home, kitchen makeover works with reasonable price
                                    range.
                                    We also perform house renovation and restoration of clients old existing furniture.
                                </p>
                            </div>

                            <div className="home__bodyCard--textRight">
                                <ul>
                                    <li>Interior space layout  Cad planning and 3d design elevation</li>
                                    <li>Furniture manufacturing</li>
                                    <li>All types of polish and art finishing, Duco paint finishing</li>
                                    <li>Kitchen remodelling</li>
                                    <li>Decorative carving work</li>
                                    <li>Creative decor making</li>
                                    <li>Terrace and balcony garden area developing</li>
                                    <li>Civil restoration work</li>
                                </ul>
                            </div>
                        </div>
                   </div>
                   {/* <hr /> */}
                   <div className="home__bodyCard">
                        <div className="home__bodyCardImage">
                                <img src={require("./images/31.jpg")} alt=""/>
                        </div>
                        <div className="home__bodyCardTitle">
                                <p>
                                    We use 60% sustainable timber and 40% new materials for our furniture and decor products to support ecological balance of nature.
                                    We are comitted to bring our customers a wide price range product that serve their need , 
                                    fulfill the expected quality rank and look elegant at same time.
                                </p>
                        </div>
                   </div>
                   {/* <hr /> */}
                   <div className="home__bodyCard">
                        <div className="home__bodyCardTitle">
                                <p>
                                    We offer an array of endless customised finishing options clients can choose for their ordered furniture
                                </p>
                                <Link to="/products"><ArrowForwardIcon className="home__bodyCardIcon" /></Link>    
                        </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Home
