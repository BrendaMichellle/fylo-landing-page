import img0 from '../images/icon-access-anywhere.svg';
import img1 from '../images/icon-security.svg';
import img2 from '../images/icon-collaboration.svg';
import img3 from '../images/icon-any-file.svg';

const dataList = [
  {
    "id": "0",
    "img": img0,
    "title": "Access your files, anywhere",
    "desc": "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
  },
  {
    "id": "1",
    "img": img1,
    "title": "Security you can trust",
    "desc": "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
  },
  {
    "id": "2",
    "img": img2,
    "title": "Real-time collaboration",
    "desc": "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
  },
  {
    "id": "3",
    "img": img3,
    "title": "Store any type of file",
    "desc": "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
  }
];

function Card() {
  return (
    <div className="card__section">
      {
        dataList.map(data => (
        <div className="card">
          <img src={data.img} alt="" className="card__img"/>
          <h2 className="card__title">{data.title}</h2>
          <p className="card__desc">{data.desc}</p>
        </div>
        ))
      }
    </div>
  )
}

export default Card
