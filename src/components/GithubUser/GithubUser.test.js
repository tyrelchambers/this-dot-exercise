import { act, render, screen } from "@testing-library/react";
import axiosMock from "axios";
import React from "react";
import GithubUser from "./GithubUser";

describe("<GithubUser/>", () => {
  test("renders user information", async () => {
    const mockedUser = {
      login: "tyrelchamberslogin",
      url: "https://github.com/tyrelchambers",
      avatar_url: "/avatar",
    };

    axiosMock.get.mockResolvedValueOnce({
      data: {
        name: "tyrelchambers",
        bio: "test bio",
        followers: 0,
        following: 1,
        twitter_username: "twitter_username",
        location: "location",
        blog: "blog",
      },
    });

    render(<GithubUser user={mockedUser} />);

    expect(await screen.findByText("tyrelchamberslogin")).toBeInTheDocument();
    expect(await screen.findByText("tyrelchambers")).toBeInTheDocument();
    expect(await screen.findByText("test bio")).toBeInTheDocument();
    expect(await screen.findByTestId("followers")).toHaveTextContent("0");
    expect(await screen.findByTestId("following")).toHaveTextContent("1");
    expect(await screen.findByText("twitter_username")).toBeInTheDocument();
    expect(await screen.findByText("location")).toBeInTheDocument();
    expect(await screen.findByText("blog")).toBeInTheDocument();
    expect(await screen.findByAltText("User")).toHaveAttribute(
      "src",
      mockedUser.avatar_url
    );
  });
});
