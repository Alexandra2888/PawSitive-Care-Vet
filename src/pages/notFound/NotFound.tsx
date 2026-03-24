import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="gradient-bg h-screen flex flex-row justify-center items-center overflow-hidden -mb-24 -mt-4">
      <div className="grid grid-cols-[46%_46%] gap-[8%] items-center justify-between max-lg:gap-4 max-sm:grid-cols-1 max-sm:text-center max-sm:mt-0">
        <div className="mt-32">
          <figcaption aria-label="not-found-image">
            <figure>
              <img src="/assets/not-found.png" alt="Not found Image" />
            </figure>
          </figcaption>
        </div>

        <div>
          <h2 className="text-[3.5rem] leading-[1.1] tracking-[-3px] font-light p-[20px_20px_20px_0] mb-5 ml-8 max-lg:text-[2.2rem]">
            404
          </h2>
          <h3>This is not the page you are looking for!</h3>
          <Link to="/" className="btn mx-auto mt-4 block w-fit" aria-label="Go back to the home page">
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
