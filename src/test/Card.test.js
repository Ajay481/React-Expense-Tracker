import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "../component/Card/Card";
import { Provider } from "react-redux";
import { store } from "../component/ReduxStore/store";
import { BrowserRouter } from "react-router-dom";

test("check EXPENSE div exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Card />
      </Provider>
    </BrowserRouter>
  );

  const expenseDiv = screen.getByText("EXPENSE:");
  expect(expenseDiv).toBeInTheDocument();
});

test("check DESCRIPTION div exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Card />
      </Provider>
    </BrowserRouter>
  );

  const descriptionDiv = screen.getByText("DESCRIPTION:");
  expect(descriptionDiv).toBeInTheDocument();
});

test("check CATEGORY div exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Card />
      </Provider>
    </BrowserRouter>
  );

  const categoryDiv = screen.getByText("CATEGORY:");
  expect(categoryDiv).toBeInTheDocument();
});
