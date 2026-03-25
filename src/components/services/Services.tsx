import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services" className="gradient-bg grid place-items-center">
      <div className="grid grid-cols-[46%_46%] gap-[8%] items-center justify-between text-white max-lg:gap-4 max-sm:grid-cols-1 max-sm:text-center max-sm:-mt-[8.5rem] max-sm:pb-4">
        <div>
          <figure>
            <figcaption aria-label="services">
              <img
                src="/assets/services.png"
                alt="Services Image"
                className="mt-8 max-w-full"
              />
            </figcaption>
          </figure>
        </div>
        <div className="min-h-fit">
          <h1 className="text-[3.5rem] leading-[1.1] tracking-[-3px] font-light max-lg:text-[2.2rem]">
            Our services
          </h1>
          <p className="my-4 text-light text-[1.1rem]">
            Making a difference in the lives of pets and their owners.
          </p>
          <ul>
            <li className="text-left pl-4">
              <GiCheckMark className="inline text-orange-400 mr-[5px]" />
              Infectious Diseases and Prevention
            </li>
            <li className="text-left pl-4">
              <GiCheckMark className="inline text-orange-400 mr-[5px]" />
              Cardiology
            </li>
            <li className="text-left pl-4">
              <GiCheckMark className="inline text-orange-400 mr-[5px]" />
              Dermatology
            </li>
            <li className="text-left pl-4">
              <GiCheckMark className="inline text-orange-400 mr-[5px]" />
              Diabetes, Nutrition, and Metabolic Diseases
            </li>
            <li className="text-left pl-4">
              <GiCheckMark className="inline text-orange-400 mr-[5px]" />
              Inhalation Anesthesia
            </li>
            <li className="text-left pl-4">
              <GiCheckMark className="inline text-orange-400 mr-[5px]" />
              Gastroenterology
            </li>
            <li className="text-left pl-4">
              <GiCheckMark className="inline text-orange-400 mr-[5px]" />
              Internal Medicine
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
