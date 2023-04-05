import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Auth } from "../component/Auth/Auth";
import { Provider } from "react-redux";
import { store } from "../component/ReduxStore/store";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

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

jest.mock("axios");
const mockAxios = axios;

const loginResponse = {
  status: "",
  message: "",
  data: {
    data: {
      displayName: "AJAY YADAV",
      email: "iamajayyadav481@gmail.com",
      expiresIn: "3600",
      idToken:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg3YzFlN2Y4MDAzNGJiYzgxYjhmMmRiODM3OTIxZjRiZDI4N2YxZGYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQUpBWSBZQURBViIsInBpY3R1cmUiOiJodHRwczovL3Byb2ZpbGVwaG90by9BZWpya2tvRUUiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTlkMWMiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05OWQxYyIsImF1dGhfdGltZSI6MTY4MDQyMDY0NywidXNlcl9pZCI6IjNCSXNzTm1nQTlTeUdrdTFXVEd3NTFJMEh4ejEiLCJzdWIiOiIzQklzc05tZ0E5U3lHa3UxV1RHdzUxSTBIeHoxIiwiaWF0IjoxNjgwNDIwNjQ3LCJleHAiOjE2ODA0MjQyNDcsImVtYWlsIjoiaWFtYWpheXlhZGF2NDgxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImlhbWFqYXl5YWRhdjQ4MUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.b3L0tq2Isgp4YSVUIVC1xvqVuZxZ2JAP1ywPm48flm6zHQeNpuLkr1vMl7ibdUzqRwiARPUaWcCfqBXRz21ZH59k2AKGzs5SGSqdLSlFoyhm5gGs4tL4hwgZKVerE3buTsJ6gOAuXHWEAXoPGJ0P4iNiaVoriyZ3zjPzyo0tLVze3awlDrAEjeBvVa1ZnZ1JBMMNUBt0MMlPuIpRA9tAdnvSGkyyK6Y9f1IE2yB4Uc4r1xxmr9RXtBphNj7VxLwmUWrAzs8dXmD0lxN0np1DrZ3dx3bKxmA9g8hZ1-mwyEJU2o4Y2YOzHGpA72hqOaRTRG5iA0ezCYw6RcVpWxl2Jw",
      kind: "identitytoolkit#VerifyPasswordResponse",
      localId: "3BIssNmgA9SyGku1WTGw51I0Hxz1",
      profilePicture: "https://profilephoto/AejrkkoEE",
      refreshToken:
        "APJWN8dDJwZL9G15y7G1i7ItPGV7NJNYVk-T3KDbSuFDTlz6r2Lb7aK7xNjIdI9YfasJ3_EQp-P_4303mwSX0iAoRqMi36WHgdvZALdIsRcq2dptEwz7fP-PMYA5F-Kak9te5s6Axce4jp5vKeEAVgCbF2_4Ox49Tn0Vg90sG8h_XHUC8tSwoWpza86B9325sBeNe1GFSOm5krdRvsS9mLhVwEgXFDjeKPJTRVeNkHYugNtfEJeqlRIEh9Pzen8mAfZSjGieWdCqjLU2ffYkh8Q3jIWoHtQvZg",
      registered: true,
    },
  },
};

test("api login call", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Auth />
      </Provider>
    </BrowserRouter>
  );

  const email = screen.getByTestId("email");
  expect(email).toBeTruthy();

  const password = screen.getByTestId("password");
  expect(password).toBeTruthy();

  const confirmPassword = screen.getByTestId("confirmPassword");
  expect(confirmPassword).toBeTruthy();

  fireEvent.change(email, { target: { value: "abc@gmail.com" } });
  fireEvent.change(password, { target: { value: "Test@123" } });
  fireEvent.change(confirmPassword, { target: { value: "Test@123" } });

  expect(email).toHaveValue("abc@gmail.com");
  expect(password).toHaveValue("Test@123");
  expect(confirmPassword).toHaveValue("Test@123");

  const submit = screen.getByTestId("submit");
  expect(submit).toBeTruthy();

  mockAxios.post.mockResolvedValueOnce(loginResponse);

  fireEvent.click(submit);

  expect(mockAxios.post).toHaveBeenCalled();
});
