import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../component/ReduxStore/store";
import { BrowserRouter } from "react-router-dom";
import { StartingPage } from "../component/Layout/StartingPage";

test("check Welcome to Expense Tracker!!! div exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <StartingPage />
      </Provider>
    </BrowserRouter>
  );

  const welcomeDiv = screen.getByText("Welcome to Expense Tracker!!!");
  expect(welcomeDiv).toBeInTheDocument();
});

test("check Your Profile is Incomplete exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <StartingPage />
      </Provider>
    </BrowserRouter>
  );

  const profileSpan = screen.getByText("Your Profile is Incomplete.");
  expect(profileSpan).toBeInTheDocument();
});

test("check Complete Now is exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <StartingPage />
      </Provider>
    </BrowserRouter>
  );

  const completeNowButton = screen.getByText("Complete Now.");
  expect(completeNowButton).toBeInTheDocument();
});

test("check VERIFY EMAIL ID button exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <StartingPage />
      </Provider>
    </BrowserRouter>
  );

  const emailButton = screen.getByText("VERIFY EMAIL ID");
  expect(emailButton).toBeInTheDocument();
});

test("check Download button exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <StartingPage />
      </Provider>
    </BrowserRouter>
  );

  const downloadButton = screen.getByText("Download");
  expect(downloadButton).toBeInTheDocument();
});

test("check Complete Now button was clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <StartingPage />
      </Provider>
    </BrowserRouter>
  );

  const completeNowButtonElement = screen.getByText("Complete Now.");
  fireEvent.click(completeNowButtonElement);
});

test("check VERIFY EMAIL ID button was clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <StartingPage />
      </Provider>
    </BrowserRouter>
  );

  const verifyButtonElement = screen.getByText("VERIFY EMAIL ID");
  fireEvent.click(verifyButtonElement);
});
