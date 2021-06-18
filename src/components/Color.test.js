import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

const blankColor = {
  color: "",
  code: {
    hex: "#",
  },
  id: 1,
};

const testColor = {
  color: "testcolor",
  code: {
    hex: "#f0f8ff",
  },
  id: 1,
};

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={blankColor} />);
});

test("Renders the color passed into component", () => {
  render(<Color color={testColor} />);
  const color = screen.queryByTestId("color");
  expect(color).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const mockHandleDelete = jest.fn();
  const mockToggleEdit = jest.fn();
  render(
    <Color
      color={testColor}
      deleteColor={mockHandleDelete}
      toggleEdit={mockToggleEdit}
    />
  );
  const deleteButton = screen.getByTestId("delete");
  userEvent.click(deleteButton);
  expect(mockHandleDelete).toBeCalled();
  expect(mockToggleEdit).toBeCalled();
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  const mockSetEditColor = jest.fn();
  const mockToggleEdit = jest.fn();
  render(
    <Color
      color={testColor}
      setEditColor={mockSetEditColor}
      toggleEdit={mockToggleEdit}
    />
  );
  const colorDiv = screen.getByTestId("color");
  userEvent.click(colorDiv);
  expect(mockSetEditColor).toBeCalled();
  expect(mockToggleEdit).toBeCalled();
});
