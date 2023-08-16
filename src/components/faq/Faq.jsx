import "./Faq.scss";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react";
import { faqSectionTitle, faqData } from '../../utils/data/data';

const Faq = () => {
  const [readMore, setReadMore] = useState(new Array(faqData.length).fill(false));

  return (
    <section id="faq">
      <div className="container">
        <div className="section__image">
          <img src="/assets/faq.png" alt="Faq Image" />
        </div>
        <div className="section__content">
          <h2>{faqSectionTitle}</h2>
          <ul>
            {faqData.map((item, index) => (
              <li key={index}>
                {`${index + 1}. ${item.question}`}
                <AiOutlinePlusSquare
                  className="icon"
                  onClick={() => {
                    const updatedReadMore = [...readMore];
                    updatedReadMore[index] = !updatedReadMore[index];
                    setReadMore(updatedReadMore);
                  }}
                />
                <br/>
                {readMore[index] ? item.answer : `${item.answer.substring(0, 0)}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
