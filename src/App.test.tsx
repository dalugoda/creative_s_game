import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app initial render", () => {
  test("renders app", () => {
    render(<App />);
    const appContainer = screen.getByTestId("app");
    expect(appContainer).toBeInTheDocument();
  });

  test("renders grid", () => {
    render(<App />);
    const gridContainer = screen.getByTestId("grid-container");
    expect(gridContainer).toBeInTheDocument();
  });

  test("renders 9 grid blocks", () => {
    render(<App />);
    const gridBlocks = screen.queryAllByTestId("grid-block");
    expect(gridBlocks.length).toBe(9);
  });

  test("renders pointer in first block", () => {
    render(<App />);
    const gridBlocks = screen.queryAllByTestId("grid-block");

    expect(gridBlocks[0]).toContainElement(screen.getByTestId("pointer"));
  });
});
