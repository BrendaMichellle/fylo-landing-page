import profile1 from '../images/profile-1.jpg';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';
import quotes from '../images/bg-quotes.png';

const reviewsData = [
  {
    "id" : "0", 
    "desc": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    "img": profile1, 
    "name": "Satish Patel", 
    "position": "Founder & CEO, Huddle"
  },
  {
    "id" : "1", 
    "desc": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    "img": profile2, 
    "name": "Bruce McKenzie", 
    "position": "Founder & CEO, Huddle"
  },
  {
    "id" : "2", 
    "desc": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    "img": profile3, 
    "name": "Iva Boyd", 
    "position": "Founder & CEO, Huddle"
  }
];

function Reviews () {
  return (
    <section className="reviews__section">
    {
      reviewsData.map(review => (
        <div className="review">
          <p className="review__desc">{review.desc}</p>
          <div className="info__section">
            <img src={review.img} alt="" className="profile__img"/>
            <p className="profile__info">{review.name} <br /> <span className="position">{review.position}</span></p>
          </div>
        </div>
      ))
    }
    <img src={quotes} alt="" className="quotes" />
    </section>
  )
};

export default Reviews; 