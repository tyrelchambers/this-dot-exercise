import React from "react";
import { H1, H2 } from "./Headings";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";

afterEach(cleanup);

describe("H1", () => {
  test("displays text passed by props.children", async () => {
    render(<H1>Hello</H1>);
    const item = await screen.findByText("Hello");

    expect(item).toBeInTheDocument();
  });
});

describe("H2", () => {
  test("displays text passed by props.children", async () => {
    render(<H1>Hello2</H1>);
    const item = await screen.findByText("Hello2");

    expect(item).toBeInTheDocument();
  });
});
