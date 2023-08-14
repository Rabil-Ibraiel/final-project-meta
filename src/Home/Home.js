import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import res from "../images/restaurant.jpg";
import Card from "../components/card/Card";
import GreekSalad from "../images/greek salad.jpg";
import LeomnDes from "../images/lemon dessert.jpg";
import bruchetta from "../images/bruchetta.svg";
import Rate from "../components/rate/Rate";
import person from "../images/person.jpg";
import image1 from "../images/Mario and Adrian A.jpg";
import image2 from "../images/Mario and Adrian b.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  console.log(JSON.parse(localStorage.getItem("table")))
  return (
    <>
      <Navbar />
      <main className="hero">
        <div className="home-text-container">
          <h2 className="home-title title">Little Lemon</h2>
          <h5 className="home-loc">Chicago</h5>

          <p className="home-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="home-btn">
            <Link to={"/booking"}><Button text={"Reserve a Table"} /></Link>
          </div>
        </div>
        <div className="home-img-container">
          <img className="home-img" src={res} />
        </div>
      </main>

      <section id="specials">
        <div className="specials-text">
          <h2 className="specials-text-title">Specials</h2>
          <div>
            <Button text={"Online Menu"} />
          </div>
        </div>
        <div className="specials-items">
          <Card
            title={"Greek Salad"}
            desc={
              "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            }
            price={12.99}
            img={GreekSalad}
          />

          <Card
            title={"Lemon Dessert"}
            desc={
              "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            }
            price={"5.00"}
            img={LeomnDes}
          />

          <Card
            title={"Bruchetta"}
            desc={
              "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            }
            price={5.99}
            img={bruchetta}
          />
        </div>
      </section>

      <section id="teste">
        <h2 className="teste-title">Testimonials</h2>
        <div className="teste-rates">
          <Rate img={person} />
          <Rate img={person} />
          <Rate img={person} />
        </div>
      </section>

      <section id="show">
        <div className="show-text-container">
          <h2 className="show-text-title title">Little Lemon</h2>
          <h5 className="show-text-loc">Chicago</h5>
          <p className="show-text-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="show-imgs-container">
          <div className="show-img-container image1">
            <img className="show-img" src={image1} loading="lazy" alt="image of two cheifs"/>
          </div>

          <div className="show-img-container image2">
            <img className="show-img" src={image2} alt="anthoer image of two cheifs" loading="lazy"/>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
