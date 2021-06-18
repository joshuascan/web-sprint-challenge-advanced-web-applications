import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import mockFetchColors from "../services/fetchColorService";
jest.mock("../services/fetchColorService");

const testColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
];

test("Renders without errors", () => {
  render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async () => {
  //Keep in mind that our service is called on mount for this component.
  //   mockFetchColors.mockResolvedValueOnce(testColors);
  //   render(<BubblePage />);
  //   await waitFor(() => {
  //     const colors = screen.getAllByTestId("color");
  //     console.log(colors);
  //   });
});
