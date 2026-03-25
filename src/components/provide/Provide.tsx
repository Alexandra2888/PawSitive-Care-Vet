import {
  provideSectionTitle,
  provideSectionDescription,
  features,
} from "../../utils/data/data";

const Provide = () => {
  return (
    <section id="provide">
      <h2>{provideSectionTitle}</h2>
      <p>{provideSectionDescription}</p>
      <div className="grid grid-cols-3 gap-8 text-white px-8 max-lg:grid-cols-2 max-lg:gap-4 max-sm:grid-cols-1">
        {features.map((feature, index) => (
          <article
            key={index}
            className="gradient-bg p-6 rounded-2xl flex gap-6 h-fit transition-all duration-400 ease-in-out hover:-mt-2 max-lg:p-[1.2rem] max-lg:gap-[0.8rem] max-lg:hover:m-0"
          >
            <i className={`${feature.icon} text-[1.7rem]`} aria-label={feature.title}></i>
            <div>
              <h4 className="mb-4 max-sm:mb-[0.8rem]">{feature.title}</h4>
              <small>{feature.description}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Provide;
