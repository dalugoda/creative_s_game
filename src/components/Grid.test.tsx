import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from "./Grid";

describe("grid render", () => {
  test("renders pointer in the correct block activeIndex=[0]", () => {
    render(<Grid activeIndex={0} />);
    const gridBlocks = screen.queryAllByTestId("grid-block");

    expect(gridBlocks[0]).toContainElement(screen.getByTestId("pointer"));
  });

  test("renders pointer in the correct block activeIndex=[5]", () => {
    render(<Grid activeIndex={5} />);
    const gridBlocks = screen.queryAllByTestId("grid-block");

    expect(gridBlocks[5]).toContainElement(screen.getByTestId("pointer"));
  });

  test("renders pointer in the correct block activeIndex=[8]", () => {
    render(<Grid activeIndex={8} />);
    const gridBlocks = screen.queryAllByTestId("grid-block");

    expect(gridBlocks[8]).toContainElement(screen.getByTestId("pointer"));
  });
});
