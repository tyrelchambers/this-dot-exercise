import { render } from "@testing-library/react";
import React from "react";
import InputWrapper from "../../components/InputWrapper/InputWrapper.jsx";

describe("<InputWrapper />", () => {
  it("renders labelTitle prop", async () => {
    const { findByText } = render(
      <InputWrapper labelFor="labelFor" labelTitle="labelTitle" />
    );
    expect(await findByText("labelTitle")).toBeInTheDocument();
  });

  it("renders children", async () => {
    const { findByText } = render(
      <InputWrapper labelFor="labelFor" labelTitle="labelTitle">
        test children
      </InputWrapper>
    );
    expect(await findByText("test children")).toBeInTheDocument();
  });
});
