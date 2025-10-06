import { Link } from "react-router-dom";

import profilepic from '../assets/images/profilepic.png'

import wendyscheeseburger from '../assets/images/wendyscheeseburgersmall.png'
import veggiehamburger from '../assets/images/veggiehamburgersmall.png'
import chickenhamburger from '../assets/images/chickenhamburgersmall.png'
import friedchickenhamburger from '../assets/images/friedchickenhamburgersmall.png'

import search from '../assets/icons/search.png'
import filter from '../assets/icons/filter.png'
import heart from '../assets/icons/heart.png'
import star from '../assets/icons/star.png'
import plus from '../assets/icons/plus.png'

import home from '../assets/icons/home.png'
import user from '../assets/icons/user.png'
import chat from '../assets/icons/chat.png'
import favourites from '../assets/icons/favourites.png'


function Home() {

    return (
        <>
            <header>
                <section className="headline">
                    <h1>Foodgo</h1>
                    <Link to={"/profile"}>
                        <img src={profilepic} alt="profile_pic" />
                    </Link>
                </section>
                <section className="subheadline">
                    <p>Order your favourite food!</p>
                </section>
            </header>
            <main>
                <section className="searchBar">
                    <img src={search} className="search-icon" alt="search" />
                    <input type="search" id="search" />
                    <img src={filter} className="filter-icon" alt="filter" />
                </section>
                <section className="burgers">
                    <Link to={"/item"}>
                        <div className="burger">
                            <img src={wendyscheeseburger} className="burger-img" alt="cheeseburger" />
                            <h3>Cheeseburger</h3>
                            <p>Wendy's Burger</p>
                            <div className="details">
                                <div className="review">
                                    <img src={star} className="star" alt="star" />
                                    <p>4.9</p>
                                </div>
                                <img src={heart} className="heart" alt="add-favourites" />
                            </div>
                        </div>
                    </Link>
                    <div className="burger">
                        <img src={veggiehamburger} className="burger-img" alt="veggie-hamburger" />
                        <h3>Hamburger</h3>
                        <p>Veggie Burger</p>
                        <div className="details">
                            <div className="review">
                                <img src={star} className="star" alt="star" />
                                <p>4.8</p>
                            </div>
                            <img src={heart} className="heart" alt="add-favourites" />
                        </div>
                    </div>
                    <div className="burger">
                        <img src={chickenhamburger} className="burger-img" alt="chicken-hamburger" />
                        <h3>Hamburger</h3>
                        <p>Chicken Burger</p>
                        <div className="details">
                            <div className="review">
                                <img src={star} className="star" alt="star" />
                                <p>4.6</p>
                            </div>
                            <img src={heart} className="heart" alt="add-favourites" />
                        </div>
                    </div>
                    <div className="burger">
                        <img src={friedchickenhamburger} className="burger-img" alt="fried-chicken-hamburger" />
                        <h3>Hamburger</h3>
                        <p>Fried Chicken Burger</p>
                        <div className="details">
                            <div className="review">
                                <img src={star} className="star" alt="star" />
                                <p>4.5</p>
                            </div>
                            <img src={heart} className="heart" alt="add-favourites" />
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <section className="footer-navigation">
                    <Link to={"/"}>
                        <img src={home} className="home-img" alt="home-icon" />
                    </Link>
                    <Link to={"/profile"}>
                        <img src={user} className="user-img" alt="user-icon" />
                    </Link>
                    <img src={chat} className="chat-img" alt="chat-icon" />
                    <img src={favourites} className="favourites-img" alt="favourites-icon" />
                </section>
                <section className="add-border">
                    <div className="add-button">
                        <img src={plus} className="plus-img" alt="plus-icon" />
                    </div>
                </section>
            </footer>
        </>
    )

}

export default Home;