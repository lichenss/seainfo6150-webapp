import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";

describe("ArticleTextToggleButton tests", () => {
  const onClick = () => {};
  it("renders correctly", () => {
    const { container } = render(
    <ArticleTextToggleButton buttonText={"Show less"} onClick={onClick} />);
    expect(container).toMatchSnapshot();
  });
});