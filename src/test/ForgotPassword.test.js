import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ForgotPassword } from "../component/Pages/ForgotPassword";
import { Provider } from "react-redux";
import { store } from "../component/ReduxStore/store";
import { BrowserRouter } from "react-router-dom";

test("check Enter the email with which you have registered label exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    </BrowserRouter>
  );

  const enterLabel = screen.getByText(
    "Enter the email with which you have registered."
  );
  expect(enterLabel).toBeInTheDocument();
});

test("check Send Link button exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    </BrowserRouter>
  );

  const sendLinkButton = screen.getByText("Send Link");
  expect(sendLinkButton).toBeInTheDocument();
});

test("check Send Link button was clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    </BrowserRouter>
  );

  const updateButtonElement = screen.getByRole("button");
  fireEvent.click(updateButtonElement);
});
