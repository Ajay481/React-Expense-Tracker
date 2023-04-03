import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Auth } from "../component/Auth/Auth";
import { Provider } from "react-redux";
import { store } from "../component/ReduxStore/store";
import { BrowserRouter } from "react-router-dom";

test("check email label exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const emailLabel = screen.getByText("Email");
  expect(emailLabel).toHaveTextContent("Email");
});

test("check password label exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const passLabel = screen.getByText("Password");
  expect(passLabel).toHaveTextContent("Password");
});

test("check confirm password label exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const confirmPassLabel = screen.getByText("Confirm Password");
  expect(confirmPassLabel).toHaveTextContent("Confirm Password");
});

test("check Forgot Password text exist", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const forPas = screen.getByText("Forgot Password");
  expect(forPas).toHaveTextContent("Forgot Password");
});

test("check email getByTestId toBeTruthy", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const email = screen.getByTestId("email");
  expect(email).toBeTruthy();
});

test("check password getByTestId toBeTruthy", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const password = screen.getByTestId("password");
  expect(password).toBeTruthy();
});

test("check confirmPassword getByTestId toBeTruthy", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const confirmPassword = screen.getByTestId("confirmPassword");
  expect(confirmPassword).toBeTruthy();
});

test("check email input fields are set correct value", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const email = screen.getByTestId("email");
  expect(email).toBeTruthy();

  fireEvent.change(email, { target: { value: "abc@gmail.com" } });

  expect(email).toHaveValue("abc@gmail.com");
});

test("check password input fields are set correct value", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const password = screen.getByTestId("password");
  expect(password).toBeTruthy();

  fireEvent.change(password, { target: { value: "Test@123" } });

  expect(password).toHaveValue("Test@123");
});

test("check confirmPassword input fields are set correct value", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const confirmPassword = screen.getByTestId("confirmPassword");
  expect(confirmPassword).toBeTruthy();

  fireEvent.change(confirmPassword, { target: { value: "Test@123" } });

  expect(confirmPassword).toHaveValue("Test@123");
});
