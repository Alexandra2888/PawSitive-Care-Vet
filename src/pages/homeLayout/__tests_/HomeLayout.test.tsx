import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../../../UI/navbar";
import { UserAuthContextProvider } from "../../../../contexts/UserAuthContext";
import { AppProvider } from "../../../../contexts/DarkModeContext";
import { Footer } from "../../../UI/footer";


describe("test HomeLayout page", () => {
    it("test if Navbar component is rendered", () => {
      render(
        <BrowserRouter>
        <AppProvider>
            <UserAuthContextProvider>
          <Navbar />
          </UserAuthContextProvider>
        </AppProvider>
      </BrowserRouter>
      );
    });

    it("test if Footer component is rendered", () => {
        render(
          <BrowserRouter>
          <AppProvider>
              <UserAuthContextProvider>
            <Footer />
            </UserAuthContextProvider>
          </AppProvider>
        </BrowserRouter>
        );
      });
});
