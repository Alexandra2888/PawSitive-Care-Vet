import { useState } from "react";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { para } from "../../utils/data/data";

const FaqItem = ({
  question,
  answer,
  id,
}: {
  question: string;
  answer: string;
  id: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      {question}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline ml-[10px] mt-[5px] bg-transparent border-none cursor-pointer p-0"
      >
        <AiOutlinePlusSquare className="w-5 text-orange-400" />
      </button>
      <br />
      <span id={id} role="region" className={isOpen ? "m-5 block" : "hidden"}>
        {answer}
      </span>
    </li>
  );
};

const Faq = () => {
  const questions = [
    { id: "faq-1", question: "1. Do I need an appointment?", answer: para },
    {
      id: "faq-2",
      question: "2. Do you offer emergency vet services?",
      answer: para,
    },
    {
      id: "faq-3",
      question: "3. I got a new pet. What do I need to do next?",
      answer: para,
    },
  ];

  return (
    <section id="faq" className="gradient-bg grid place-items-center">
      <div className="grid grid-cols-[46%_46%] items-center justify-between min-h-fit pb-6 max-lg:gap-4 max-sm:grid-cols-1 max-sm:text-center max-sm:mt-0">
        <div>
          <img src="/assets/faq.png" alt="Faq Image" />
        </div>
        <div>
          <h2 className="p-4">FAQ</h2>
          <ul>
            {questions.map((q) => (
              <FaqItem key={q.id} {...q} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
