import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SignIn } from "../../signin";
import { UserAuthContextProvider } from "../../../contexts/UserAuthContext";

describe("test SignIn page", () => {
  it("test if SignIn component is rendered", () => {
    render(
      <BrowserRouter>
        <UserAuthContextProvider>
          <SignIn />
        </UserAuthContextProvider>
      </BrowserRouter>
    );
  });
});
