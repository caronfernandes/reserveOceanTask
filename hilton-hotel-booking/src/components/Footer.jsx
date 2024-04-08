import React from "react";

import mapIcom from "../assets/img/map-pin.svg";
import phoneIcon from "../assets/img/phone.svg";

import mailIcon from "../assets/img/mail.svg";

import instagramIcon from "../assets/img/instagram.svg";
import facebookIcon from "../assets/img/facebook.svg";
import Icon from "../assets/img/phone.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <div className="footer-description">
            <h3 className="footer-description-title">Hilton Heathrow Hotels</h3>
            <p>Hospitality and Comfort are our watchwords</p>
          </div>
          <div className="footer-contact-us">
            <h3 className="footer-description-title">Contact Us</h3>
            <p className="footer-description-detail">
              <img
                src={mapIcom}
                className="footer-description-icon"
                alt="Hilton Heathrow hotel location"
              />
              <span>Heathrow, London</span>
            </p>
            <p className="footer-description-detail">
              <img
                src={phoneIcon}
                className="footer-description-icon"
                alt="Hilton Heathrow hotels phone number"
              />
              <span>08185956620</span>
            </p>
            <p className="footer-description-detail">
              <img
                src={mailIcon}
                className="footer-description-icon"
                alt="Hilton Heathrow hotels email"
              />
              <span>support@Hilton Heathrowhotels.com</span>{" "}
            </p>
          </div>
          <div className="footer-follow-us">
            <h3 className="footer-description-title">Follow Us</h3>
            <ul className="footer-follow-us-lists">
              <li className="follow-us-list">
                <a href="">
                  <img
                    src={facebookIcon}
                    alt="Hilton Heathrow hotels facebook page"
                  />
                </a>
              </li>
              <li className="follow-us-list">
                <a href="">
                  <img
                    src="../assets/img/twitter.svg"
                    alt="Hilton Heathrow hotels twitter page"
                  />
                </a>
              </li>
              <li className="follow-us-list">
                <a href="">
                  <img
                    src={instagramIcon}
                    alt="Hilton Heathrow hotels instagram page"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
