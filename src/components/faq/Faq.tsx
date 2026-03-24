import { useState } from "react";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { para } from "../../utils/data/data";

const Faq = () => {
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);

  return (
    <section id="faq" className="gradient-bg grid place-items-center">
      <div className="grid grid-cols-[46%_46%] items-center justify-between min-h-fit pb-6 max-lg:gap-4 max-sm:grid-cols-1 max-sm:text-center max-sm:mt-0">
        <div>
          <img src="/assets/faq.png" alt="Faq Image" />
        </div>
        <div>
          <h2 className="p-4">FAQ</h2>
          <ul>
            <li>
              1. Do I need an appointment?
              <AiOutlinePlusSquare
                className="inline ml-[10px] mt-[5px] w-5 text-orange-400 absolute cursor-pointer"
                onClick={() => setReadMore1(!readMore1)}
              />
              <br />
              <span className={`${readMore1 ? "m-5 block" : ""}`}>
                {readMore1 ? para : `${para.substring(0, 0)}`}
              </span>
            </li>
          </ul>
          <ul>
            <li>
              2. Do you offer emergency vet services?
              <AiOutlinePlusSquare
                className="inline ml-[10px] mt-[5px] w-5 text-orange-400 absolute cursor-pointer"
                onClick={() => setReadMore2(!readMore2)}
              />
              <br />
              <span className={`${readMore2 ? "m-5 block" : ""}`}>
                {readMore2 ? para : `${para.substring(0, 0)}`}
              </span>
            </li>
          </ul>
          <ul>
            <li>
              3. I got a new pet. What do I need to do next?
              <AiOutlinePlusSquare
                className="inline ml-[10px] mt-[5px] w-5 text-orange-400 absolute cursor-pointer"
                onClick={() => setReadMore3(!readMore3)}
              />
              <br />
              <span className={`${readMore3 ? "m-5 block" : ""}`}>
                {readMore3 ? para : `${para.substring(0, 0)}`}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
