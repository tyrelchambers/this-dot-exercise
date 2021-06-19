import { fireEvent, render } from "@testing-library/react";
import React from "react";
import IndexPage from "./IndexPage";

describe("<IndexPage/>", () => {
  it("renders", async () => {
    const { findByText } = render(<IndexPage />);

    expect(await findByText("GitHub User Search")).toBeInTheDocument();
  });

  it("displays loading animation when searching", async () => {
    const { findByPlaceholderText, findByTestId } = render(<IndexPage />);

    const input = await findByPlaceholderText("Enter Github username");

    await fireEvent.change(input, { target: { value: "test" } });

    expect(await findByTestId("spinner")).toBeInTheDocument();
  });
});
