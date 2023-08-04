import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, expect } from "vitest";

test("renders Hello in title", () => {
  render(<App />);
  const helloTitle = screen.getByText(/Hello/i);
  expect(helloTitle).toBeInTheDocument();
});

// // failed tests
// test("renders Hello in title", () => {
//   render(<App />);
//   const helloTitle = screen.getByText(/Hi/i);
//   expect(helloTitle).toBeInTheDocument();
// });
