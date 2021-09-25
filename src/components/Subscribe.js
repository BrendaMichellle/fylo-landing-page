import { Button } from '../components/Button.style';

function Subscribe() {
  return (
    <div className="form">
      <h2 className="form__title">Get early access today</h2>
      <p className="form__desc">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      <div className="form__sub">
        <input type="text" className="form__input" placeholder="email@example.com"/>
        <Button className="form__button">Get Started For Free</Button>
      </div>
    </div>
  )
}

export default Subscribe;