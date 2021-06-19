import { render } from "@testing-library/react";
import React from "react";
import Input from "./Input";

describe("<Input />", () => {
  it("renders props", async () => {
    const { findByPlaceholderText } = render(<Input placeholder="test" />);

    expect(await findByPlaceholderText("test")).toBeInTheDocument();
  });
});
