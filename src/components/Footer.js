import Logo from "../images/logo.svg";
import locationIcon from '../images/icon-location.svg';
import phoneIcon from '../images/icon-phone.svg';
import emailIcon from '../images/icon-email.svg';


function Footer() {
  return (
    <section className="footer">
      <img src={Logo} alt="" className="footer__img"/>
      <div className="footer__info">
        <div className="info">
          <img src={locationIcon} alt="" className="info__icon location"/>
          <p className="info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="info">
          <img src={phoneIcon} alt="" className="info__icon"/>
          <p className="info__text">+1-543-123-4567</p>
        </div>
        <div className="info">
          <img src={emailIcon} alt="" className="info__icon" />
          <p className="info__text">example@fylo.com</p>
        </div>
      </div>
      <div className="footer__nav1">
        <a href="Brendamichellle.com" className="nav__link">About Us</a>
        <a href="Brendamichellle.com" className="nav__link">Jobs</a>
        <a href="Brendamichellle.com" className="nav__link">Press</a>
        <a href="Brendamichellle.com" className="nav__link">Blog</a>
      </div>
      <div className="footer__nav2">
        <a href="Brendamichellle.com" className="nav__link">Contact Us</a>
        <a href="Brendamichellle.com" className="nav__link">Terms</a>
        <a href="Brendamichellle.com" className="nav__link">Privacy</a>
      </div>
      <div className="footer__socials">
        <i className="fab fa-facebook-f socials__icon"></i>
        <i className="fab fa-twitter socials__icon"></i>
        <i className="fab fa-instagram socials__icon"></i>
      </div>
    </section>
  )
}

export default Footer;