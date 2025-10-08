import { Link } from "react-router-dom";

import arrow_black from '../assets/icons/arrow-black.png'
import search from '../assets/icons/search.png'
import star from '../assets/icons/star.png'
import plus from '../assets/icons/plus.png'
import minus from '../assets/icons/minus.png'

import wendyscheeseburger from '../assets/images/wendyscheeseburgerlarge.png'

import '../style/Item.css'


function Item() {

    return (
    <>
        <header className="item-header">
            <Link to={"/"}>
                <img src={arrow_black} alt="back" />
            </Link>
            <img src={search} alt="search" />
        </header>
        <main className="item-main">
            <article>
                <section className="hero">
                    <img src={wendyscheeseburger} className="hero" alt="cheeseburger" />
                    <h1>Cheeseburger Wendy's Burger</h1>
                </section>
                <section className="rating">
                    <img src={star} alt="star" />
                    <p>4.9 - 26 mins</p>
                </section>
                <section className="description">
                    <p>The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.</p>
                </section>
                <section className="info">
                    <div className="spicy">
                        <label htmlFor="spicy-bar">Spicy</label>
                        <progress id="spicy-bar" value="60" max="100"></progress>
                        <div className="spice-level">
                            <p className="mild">Mild</p>
                            <p className="hot">Hot</p>
                        </div>
                    </div>
                    <div className="portion">
                        <img src={minus} className="remove-img" alt="remove-icon" />
                        <input type="text" id="portion" placeholder="0" />
                        <img src={plus} className="add-img" alt="add-icon" />
                    </div>
                </section>
            </article>
        </main>
        <footer className="item-footer">
            <section className="price">
                <h2>$8.24</h2>
            </section>
            <section className="order-now">
                <h2>ORDER NOW</h2>
            </section>
        </footer>
    </>
  )

}

export default Item;