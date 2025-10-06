import { Link } from "react-router-dom";

import arrow_black from '../assets/icons/arrow-black.png'
import search from '../assets/icons/search.png'
import star from '../assets/icons/star.png'

import wendyscheeseburger from '../assets/images/wendyscheeseburgerlarge.png'


function Item() {

    return (
    <>
        <header>
            <Link to={"/"}>
                <img src={arrow_black} alt="back" />
            </Link>
            <img src={search} alt="search" />
        </header>
        <main>
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
            </article>
        </main>
        <footer>

        </footer>
    </>
  )

}

export default Item;