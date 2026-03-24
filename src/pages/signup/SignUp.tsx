import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../../../supabase";
import { toast } from "react-toastify";

import { OAuth } from "../../components/auth";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();

  function onEmailChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  }

  function onPasswordChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  }

  function onNameChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
        },
      });

      if (error) throw error;

      if (data.user) {
        await supabase.from("profiles").upsert({
          id: data.user.id,
          name,
          email,
        });
      }

      navigate("/sign-in");
    } catch (error) {
      toast.error("Something went wrong with the registration");
    }
  }

  return (
    <section className="container">
      <div className="card">
        <figure>
          <figcaption aria-label="register-image">
            <img src="/assets/register.png" alt="register" />
          </figcaption>
        </figure>
        <form className="card-form" onSubmit={onSubmit}>
          <h2 className="card-form-title">Sign Up</h2>
          <div className="input">
            <Input
              type="text"
              id="name"
              value={name}
              onChange={onNameChange}
              className="input-field"
            />
            <label className="input-label">Name:</label>
          </div>

          <div className="input">
            <Input
              type="email"
              value={email}
              className="input-field"
              onChange={onEmailChange}
            />
            <label className="input-label">Email:</label>
          </div>

          <div className="input">
            <Input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              className="input-field"
            />
            <label className="input-label">Password:</label>
          </div>

          <div className="action">
            <Button type="submit">Get started</Button>
          </div>
          <div className="action-auth">
            <OAuth />
          </div>
        </form>
        <div className="card-info">
          <div>
            <div>
              Have an account?
              <Link to="/sign-in">
                <div className="wrapper">
                  <div className="inner">
                    <span className="hover-shadow hover-color">
                      <span>L</span>
                      <span>o</span>
                      <span>g</span>
                      <span>i</span>
                      <span>n</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/forgot-password">
                <div className="wrapper">
                  <div className="inner">
                    <span className="hover-shadow hover-color">
                      <span>F</span>
                      <span>o</span>
                      <span>r</span>
                      <span>g</span>
                      <span>o</span>
                      <span>t</span>
                      <span> </span>
                      <span>p</span>
                      <span>a</span>
                      <span>s</span>
                      <span>s</span>
                      <span>w</span>
                      <span>o</span>
                      <span>r</span>
                      <span>d</span>
                      <span>?</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
