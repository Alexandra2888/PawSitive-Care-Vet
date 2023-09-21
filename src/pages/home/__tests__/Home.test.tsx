import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Banner } from "../../../components/banner";
import { Provide } from "../../../components/provide";
import { Services } from "../../../components/services";
import { Specialists } from "../../../components/specialists";
import { Testimonials } from "../../../components/testimonials";
import { Contact } from "../../contact";
import { Faq } from "../../../components/faq";
import { BrowserRouter } from "react-router-dom";

describe("test Home page", () => {
  it("test if Banner component is rendered", () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>
    );
  });

  it("test if Provide component is rendered", () => {
    render(
      <BrowserRouter>
        <Provide />
      </BrowserRouter>
    );
  });

  it("test if Services component is rendered", () => {
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    );
  });

  it("test if Specialists component is rendered", () => {
    render(
      <BrowserRouter>
        <Specialists />
      </BrowserRouter>
    );
  });

  it("test if Testimonials component is rendered", () => {
    render(
      <BrowserRouter>
        <Testimonials />
      </BrowserRouter>
    );
  });

  it("test if Contact component is rendered", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
  });

  it("test if Faq component is rendered", () => {
    render(
      <BrowserRouter>
        <Faq />
      </BrowserRouter>
    );
  });
});
