import {
  specialistData,
  specialistsSectionTitle,
  specialistsSectionDescription,
} from "../../utils/data/data";

const Specialists = () => {
  return (
    <section id="specialists">
      <h2>{specialistsSectionTitle}</h2>
      <p>{specialistsSectionDescription}</p>
      <div className="grid grid-cols-4 gap-8 w-[82%] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-1">
        {specialistData.map((specialist, index) => (
          <article
            key={index}
            className="group bg-white rounded-2xl shadow-[0_1.5rem_1.5rem_rgba(12,3,27,0.1)] relative transition-all duration-700 ease-in-out hover:shadow-none"
          >
            <div className="specialist-image">
              <figure aria-label={`specialist ${index + 1}`}>
                <figcaption>
                  <img src={specialist.image} alt={`Specialist ${index + 1}`} />
                </figcaption>
              </figure>
            </div>
            <div className="my-6 text-center text-black">
              <h4>{specialist.name}</h4>
              <small>{specialist.specialization}</small>
            </div>
            <div className="absolute top-[1.2rem] right-[1.2rem] flex flex-col gap-4 opacity-0 invisible transition-all duration-1000 delay-400 ease-in-out group-hover:opacity-100 group-hover:visible">
              <a
                href={specialist.socialLinks.linkedin}
                className="bg-white text-primary p-[0.4rem] flex text-[0.8rem] rounded-full transition-all duration-400 ease-in-out hover:bg-primary hover:text-white"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href={specialist.socialLinks.twitter}
                className="bg-white text-primary p-[0.4rem] flex text-[0.8rem] rounded-full transition-all duration-400 ease-in-out hover:bg-primary hover:text-white"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a
                href={specialist.socialLinks.facebook}
                className="bg-white text-primary p-[0.4rem] flex text-[0.8rem] rounded-full transition-all duration-400 ease-in-out hover:bg-primary hover:text-white"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href={specialist.socialLinks.instagram}
                className="bg-white text-primary p-[0.4rem] flex text-[0.8rem] rounded-full transition-all duration-400 ease-in-out hover:bg-primary hover:text-white"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
            <a
              href={specialist.socialLinks.whatsapp}
              className="bg-success text-white absolute left-1/2 -translate-x-1/2 bottom-[30%] p-4 rounded-full flex opacity-0 invisible transition-all duration-1000 delay-400 ease-in-out group-hover:opacity-100 group-hover:visible"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specialists;
