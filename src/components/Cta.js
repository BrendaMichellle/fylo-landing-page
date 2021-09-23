import img from '../images/illustration-stay-productive.png';
import icon from '../images/icon-arrow.svg';

function Cta() {
  return (
    <section className="Cta__section">
      <img src={img} alt="" className="Cta__img"/>
      <h2 className="Cta__title"> Stay Productive, wherever you are</h2>
      <div className="Cta__desc">
      <p className="desc">Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
      storage needs.</p>
      <p className="desc">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>

      </div>
      <a href="frontendmentor.io" className="Cta__link">See how Fylo works<img src={icon} alt=""/></a>
    </section>
  )
}

export default Cta; 