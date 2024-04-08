import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import clockImg from "../assets/img/clock.svg";
import fitnessIcon from "../assets/img/database.svg";
import coffeeIcon from "../assets/img/coffee.svg";
import wifiIcon from "../assets/img/wifi.svg";
import videoLinkImg from "../assets/img/video link.webp";
import hotelImage1 from "../assets/img/hotel-1.webp";
import hotelImage2 from "../assets/img/hotel-2.webp";
import hotelImage3 from "../assets/img/hotel-3.webp";

import hotelImage4 from "../assets/img/hotel-4-large.webp";
import hotelImage5 from "../assets/img/hotel-5.webp";
import bedIcon from "../assets/img/bed.png";
import Icon from "../assets/img/phone.svg";
import hotelImage6 from "../assets/img/hotel-6.webp";
import checkSquareImg from "../assets/img/check-square.svg";
import customerImg1 from "../assets/img/customer1.webp";
import customerImg2 from "../assets/img/customer2.webp";
import customerImg3 from "../assets/img/customer3.webp";
import Footer from "../components/Footer";
import telephoneImg from "../assets/img/telephone.webp";
import gymImage from "../assets/img/gymnasium.webp";
import helipadImage from "../assets/img/helipad.webp";
import swimmingPoolImage from "../assets/img/swimming_pool.webp";
import restaurantImage from "../assets/img/restaurants.webp";

const Home = () => {
  return (
    <>
      <>
        {/* <div id="loader">
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve">
            <path
              fill="#d4af37"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div> */}
        <Navbar />
        <div className="jumbotron-container">
          <div className="jumbotron-left">
            <h2 className="jumbotron-header">
              Discover the perfect balance <br /> of hospitality, luxury and{" "}
              <br />
              comfort.
            </h2>
            <p>
              We are focused on providing clients with the highest level
              <br />
              of comfort and excellent affordable rates
            </p>
            <Link to="/booking" className="btn btn-fill btn-large">
              Book Now
            </Link>
          </div>
          <div className="jumbotron-right">
            <form action="" className="jumbotron-form">
              {/* Put the form here */}
              <h3>Scared you can't afford it?</h3>
              <br />
              <p>
                Don't worry, our hotel offers the best
                <br /> affordable rates you can ever find.
              </p>
              <label className="hide" htmlFor="arrival">
                arrival date
              </label>
              <input
                type="date"
                id="arrival"
                name="arrival_date"
                placeholder="Arrival Date"
              />
              <br />
              <label className="hide" htmlFor="departure">
                departure date
              </label>
              <input
                type="date"
                id="departure"
                name="departure_date"
                placeholder="Departure Date"
              />
              <br />
              <label className="" htmlFor="guests">
                Guests
              </label>
              <select name="guests" id="guests" placeholder="Guests">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>

              <br />
              <button type="button" className="rates">
                CHECK AVAILABLITY
              </button>
            </form>
          </div>
        </div>
        {/* Enjoy your stay in our hotel */}
        <div className="enjoy-container">
          <div className="enjoy-header">
            <h2 className="enjoy-heading">
              Enjoy your stay <br />
              at our hotel
            </h2>
            <hr className="horizontal" />
            <p>
              We are more than being a hotel because we are able
              <br /> to combine the quality standard of a hotel with the
              <br /> advantages of an apartment.
            </p>
          </div>
          <div className="enjoy-services">
            <div className="first-col">
              <div className="upper">
                <span>
                  <img
                    src={clockImg}
                    alt="clock icon"
                    className="enjoy__clock-icon"
                  />
                </span>
                <h3>24 hours Room Service</h3>
                <p>
                  You have access to 24-hours a day room service at our hotel.
                </p>
              </div>
              <div className="lower">
                <span>
                  <img
                    src={fitnessIcon}
                    alt="fitness icon"
                    className="enjoy__fitness-icon"
                  />
                </span>
                <h3>Fitness and Spa</h3>
                <p>
                  Access to fitness and Spa is part of our hotel package when
                  you make a booking.
                </p>
              </div>
            </div>
            <div className="sec-col">
              <div className="upper">
                <span>
                  <img
                    src={coffeeIcon}
                    alt="coffee icon"
                    className="enjoy__coffee-icon"
                  />
                </span>
                <h3>Restaurant and Bars</h3>
                <p>
                  You have access to the world state of art restaurants and bars
                  at our hotel
                </p>
              </div>
              <div className="lower">
                <span>
                  <img
                    src={wifiIcon}
                    alt="wifi icon"
                    className="enjoy__wifi-icon"
                  />
                </span>
                <h3>Free Wi-Fi Access</h3>
                <p>
                  You have access to 24-hours free Wi-Fi services irrespective
                  of any room.
                </p>
              </div>
            </div>
            <div className="third-col cont">
              {/* <img
                src="./assets/img/ant-design_play-circle-filled.svg"
                alt="video play icon"
                className="enjoy__play-icon"
              /> */}
              <img
                src={videoLinkImg}
                alt="women in swimming pool"
                className="third-col-video"
              />
            </div>
          </div>
        </div>
        <section className="special-offers">
          {/* Top Text */}
          <div className="page-header-container">
            <h2 className="page-header">
              Simplicity is the ultimate <br />
              Watchword
            </h2>
          </div>
          <div className="row center-lg">
            <div className="col image-col right-marg">
              <img src={hotelImage1} alt="room-image" className="small-image" />
              <img src={hotelImage2} alt="room-image" className="small-image" />
              <img
                src={hotelImage3}
                alt="room-image"
                className="small-image img-hide"
              />
              <div className="side-by-side-container">
                <div className="large-image-container">
                  <img
                    src={hotelImage4}
                    alt="room-image-large"
                    className="large-image"
                  />
                </div>
                <section className="stacked-image-container">
                  <div>
                    <img
                      src={hotelImage5}
                      alt="room-image"
                      className="small-image"
                    />
                  </div>
                  <div>
                    <img
                      src={hotelImage6}
                      alt="room-image"
                      className="small-image"
                    />
                  </div>
                </section>
              </div>
            </div>
            <div className="col">
              <p className="offers-sub-title">
                The fact that we are run by hospitality professionals
                <br />
                and equipped with the world best interior designers <br /> is
                why our rooms and suites are second to none in <br />
                the universe
              </p>
              <ul className="offers-list">
                <li>
                  <div>
                    <img
                      src={checkSquareImg}
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">Standard Room</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src={checkSquareImg}
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">Deluxe Room</p>
                  </div>
                </li>
              </ul>
              <Link to="/booking">
                <span className="btn btn-fill btn-large centered">
                  Book Now
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="rooms-section" id="rooms-section">
          <div className="page-header-container">
            <h2 className="page-header">Our Rooms</h2>
          </div>
          <div className="row center-lg">
            <div className="rooms col col-2">
              <img
                src="https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_42_nastdj.png"
                alt=""
                className="rooms-img"
              />
              <h3 className="room-title">Standard Room</h3>
              <p className="room-text">
                Designed specifically for Practicality and <br /> comfort
              </p>
              <div>
                <div className="details-container">
                  <img src={checkSquareImg} alt="tick" className="list-icon" />
                  <p className="list-text">2 Persons</p>
                </div>
                <div className="details-container">
                  <img src={bedIcon} alt="tick" className="list-icon" />
                  <p className="list-text">1 Standard size bed</p>
                </div>
              </div>
              <p className="amount-text">GBP 100 Per Night</p>
              <div className="buttons-container">
                <a href="#" className="btn btn-ghost">
                  View More
                </a>
                <Link to="/booking">
                  <span className="btn btn-fill">Book Now</span>
                </Link>
              </div>
            </div>
            <div className="rooms col col-2">
              <img
                src="https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_43_d9eepu.png"
                alt=""
                className="rooms-img"
              />
              <h3 className="room-title">Deluxe Room</h3>
              <p className="room-text">
                Designed specifically for Luxury and <br /> vanity
              </p>
              <div>
                <div className="details-container">
                  <img src={checkSquareImg} alt="tick" className="list-icon" />
                  <p className="list-text">2 Persons</p>
                </div>
                <div className="details-container">
                  <img src={bedIcon} alt="tick" className="list-icon" />
                  <p className="list-text">1 Kingsize bed</p>
                </div>
              </div>
              <p className="amount-text">GBP 200 Per Night</p>
              <div className="buttons-container">
                <a href="#" className="btn btn-ghost">
                  View More
                </a>
                <Link to="/booking">
                  <span className="btn btn-fill">Book Now</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="facilities-section">
          <div className="container">
            {/* Top Text */}
            <div className="page-header-container">
              <h2 className="page-header">Star Hotel Facilities</h2>
              <hr />
              <p className="page-sub-header">
                Get the most of our hotel facilities. Enjoy the state of <br />{" "}
                the art facilities in our hotel
              </p>
            </div>
            {/* Upper Section */}
            <section className="upper-section">
              <div className="row center-lg">
                <div className="col image-col right-marg">
                  <div className="large-image-container">
                    <img
                      src={telephoneImg}
                      alt="room-image-large"
                      className="large-image"
                    />
                  </div>
                </div>
                {/* Top Right Text */}
                <div className="col">
                  <h3 className="right-title">
                    Access to 24hr Digital <br /> Telephone Services
                  </h3>
                  <p>
                    With our feature rich Digital telephone services, you <br />{" "}
                    will have the flexibility you have always wanted with <br />{" "}
                    voice communication from your home or business.
                  </p>
                  <br />
                  <h3>More Details</h3>
                  <ul className="facilities-list">
                    <li>
                      <div>
                        <img
                          src={checkSquareImg}
                          alt="tick"
                          className="list-icon"
                        />
                        <p className="list-text">Unlimited Long Distance</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src={checkSquareImg}
                          alt="tick"
                          className="list-icon"
                        />
                        <p className="list-text">Caller ID</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src={checkSquareImg}
                          alt="tick"
                          className="list-icon"
                        />
                        <p className="list-text">Caller Waiting</p>
                      </div>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-fill btn-large">
                    View More
                  </a>
                </div>
              </div>
            </section>
            {/* Other Facilities Section */}
            <div className="up">
              <h2 className="page-header">Other Facilities</h2>
              <hr />
            </div>
            {/* Facilities Gallery */}
            <div className="container">
              <div className="containera">
                <div className="gallery">
                  <div className="gallery-item">
                    <img className="gallery-image" src={gymImage} alt="gym" />
                    <h4>GYMNASIUM</h4>
                    <p className="imggrid">
                      We have the most equipped gymnasium in the country with an
                      instructor always available.
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img
                      className="gallery-image"
                      src={helipadImage}
                      alt="helipad"
                    />
                    <h4>HELIPAD</h4>
                    <p className="imggrid">
                      Access to the state of the art helipad coupled with pilots
                      with over ten years experience.
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img
                      className="gallery-image"
                      src={restaurantImage}
                      alt="restaurants"
                    />
                    <h4>RESTAURANTS</h4>
                    <p className="imggrid">
                      We have the best local and intercontinental dishes you
                      have ever tasted before in our hotel.
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img
                      className="gallery-image"
                      src={swimmingPoolImage}
                      alt="swim"
                    />
                    <h4>SWIMMING POOLS</h4>
                    <p className="imggrid">
                      We have the best equipped swimming pool in the country
                      with an instructor waiting to guide you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="review-container">
          <div className="review-header">
            <h2 className="review-title">Client Reviews</h2>
            <hr className="horizontal" />
            <p className="">
              We are very proud of the services we offer to our customers.
              <br />
              Read every word from our happy customers.
            </p>
          </div>
          <div className="cards-container">
            <div className="card">
              <img src={customerImg1} alt="" className="card-avi" />
              <h2 className="card-title">Mark Essien</h2>
              <p className="card-desc">
                Words can't explain the kind of treatment I received from the
                management of Hilton Heathrow hotels. They are the best in the
                country.
              </p>
            </div>
            <div className="card">
              <img src={customerImg2} alt="" className="card-avi" />
              <h2 className="card-title">Seyi Onifade</h2>
              <p className="card-desc">
                Hilton Heathrow hotels makes you feel the best room quality that
                makes you feel the comfort of a home.
              </p>
            </div>
            <div className="card">
              <img src={customerImg3} alt="" className="card-avi" />
              <h2 className="card-title">Fayemi David</h2>
              <p className="card-desc">
                My Family and I are very happy when we lodge into Hilton
                Heathrow hotels. They are by far the best in the universe.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </>
  );
};

export default Home;
