import "./Faq.scss";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react";
import { para } from '../../utils/constants/constants';


const Faq = () => {
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);

  return (
    <section id="faq">
      <div className="container">
        <div className="section__image">
          <img src="../../../public/assets/faq.png" alt="Faq Image" />
        </div>
        <div className="section__content">
          <h2>FAQ</h2>
          <ul>
            <li>
              1. Do I need an appointment?
              <AiOutlinePlusSquare
                className="icon"
                onClick={() => setReadMore1(!readMore1)}
              />
              <br></br>
              {readMore1 ? para : `${para.substring(0, 0)}`}
            </li>
          </ul>
          <ul>
            <li>
              2. Do you offer emergency vet services?
              <AiOutlinePlusSquare
                className="icon"
                onClick={() => setReadMore2(!readMore2)}
              />
              <br></br>
              {readMore2 ? para : `${para.substring(0, 0)}`}
            </li>
          </ul>
          <ul>
            <li>
              3. I got a new pet. What do I need to do next?
              <AiOutlinePlusSquare
                className="icon"
                onClick={() => setReadMore3(!readMore3)}
              />
              <br></br>
              {readMore3 ? para : `${para.substring(0, 0)}`}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
