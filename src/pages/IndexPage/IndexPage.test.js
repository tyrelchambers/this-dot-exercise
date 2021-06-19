import { act, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import IndexPage from "./IndexPage";
import axiosMock from "axios";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

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
