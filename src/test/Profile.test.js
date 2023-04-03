import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Profile } from "../component/Pages/Profile";
import { Provider } from "react-redux";
import { store } from "../component/ReduxStore/store";
import { BrowserRouter } from "react-router-dom";

test("check Full Name label exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Profile />
      </Provider>
    </BrowserRouter>
  );

  const fullNameLabel = screen.getByText("Full Name:");
  expect(fullNameLabel).toBeInTheDocument();
});

test("check Profile Photo URL label exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Profile />
      </Provider>
    </BrowserRouter>
  );

  const photoURLLabel = screen.getByText("Profile Photo URL:");
  expect(photoURLLabel).toBeInTheDocument();
});

test("check Contact Details exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Profile />
      </Provider>
    </BrowserRouter>
  );

  const contactDetails = screen.getByText("Contact Details");
  expect(contactDetails).toBeInTheDocument();
});

test("check Cancel button exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Profile />
      </Provider>
    </BrowserRouter>
  );

  const cancelButton = screen.getByText("Cancel");
  expect(cancelButton).toBeInTheDocument();
});

test("check Update button exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Profile />
      </Provider>
    </BrowserRouter>
  );

  const updateButton = screen.getByText("Update");
  expect(updateButton).toBeInTheDocument();
});

test("check Update button was clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Profile />
      </Provider>
    </BrowserRouter>
  );

  const updateButtonElement = screen.getByText("Update");
  fireEvent.click(updateButtonElement);
});

test("check Cancel button was clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Profile />
      </Provider>
    </BrowserRouter>
  );

  const cancelButtonElement = screen.getByText("Cancel");
  fireEvent.click(cancelButtonElement);
});


