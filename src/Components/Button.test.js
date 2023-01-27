import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./Button";

test("The button should render and display 'hello world'", async () => {
  // 3As
  // arrange
  render(<Button className="class-a">hello world</Button>);

  // act
  const btn = await screen.findByText("hello world");

  // assert
  expect(btn).toBeVisible();
  expect(btn).toHaveClass("btn class-a");
});
