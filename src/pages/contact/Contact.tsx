import { Map } from "../../components/map";

const Contact = () => {
  return (
    <section
      id="section"
      className="gradient-bg grid place-items-center overflow-hidden text-center text-white"
    >
      <div className="container">
        <div className="grid place-items-center mb-4 mt-12 gap-4">
          <h1 className="text-[3.5rem] leading-[1.1] tracking-[-3px] font-light mt-8!">
            PawSitive Vet Care
          </h1>
          <p className="my-4 mb-8 text-light text-[1.1rem]">
            Partnering with you for your pet&apos;s health.
          </p>
          <div>
            <i className="bx bxs-phone mr-[5px]" aria-label="phone"></i>
            <small>+2335555555</small>
          </div>
          <div>
            <i className="bx bx-mail-send mr-[5px]" aria-label="email"></i>
            <small>support@pawsitive-vet.com</small>
          </div>
          <div>
            <i className="bx bx-home mr-[5px]" aria-label="address"></i>
            <small>
              1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
            </small>
          </div>
        </div>
        <div>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;
