import { describe, it } from "vitest";
import { App } from "../App";
import { HomeLayout } from "../pages/homeLayout";
import { NotFound } from "../pages/notFound";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { SignUp } from "../pages/signup";
import { SignIn } from "../pages/signin";
import { ForgotPassword } from "../pages/forgotpassword";
import { AddAppointments } from "../pages/addAppointments";
import { Appointments } from "../pages/appointments";

describe("test App component", () => {
  it("App component renders without errors", () => {
    render(<App />);
  });

  it("test HomeLayout page", () => {
    <BrowserRouter>
      <HomeLayout />
    </BrowserRouter>;
  });

  it("test NotFound component", () => {
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>;
  });

  it("test Home page", () => {
    <BrowserRouter>
      <Home />
    </BrowserRouter>;
  });

  it("test SignUp page", () => {
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>;
  });

  it("test SignIn page", () => {
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>;
  });

  it("test HomeLayout page", () => {
    <BrowserRouter>
      <ForgotPassword />
    </BrowserRouter>;
  });

  it("test AddAppointments page", () => {
    <BrowserRouter>
      <AddAppointments />
    </BrowserRouter>;
  });

  it("test Appointments page", () => {
    <BrowserRouter>
      <Appointments />
    </BrowserRouter>;
  });
});
