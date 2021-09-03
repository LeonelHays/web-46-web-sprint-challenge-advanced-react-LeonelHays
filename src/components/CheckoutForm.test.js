import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.queryByLabelText('First Name:')
    userEvent.type(firstNameInput, 'starry')
    const lastNameInput = screen.queryByLabelText('Last Name:')
    userEvent.type(lastNameInput, 'hornet')
    const address = screen.queryByLabelText('Address:')
    userEvent.type(address, 'tx 1234 1234')
    const cityInput = screen.queryByLabelText('City:')
    userEvent.type(cityInput, 'tatum')
    const stateInput = screen.queryByLabelText('State:')
    userEvent.type(stateInput, 'tx')
    const zipInput = screen.queryByLabelText('Zip:')
    userEvent.type(zipInput, '75691')
    const checkoutBtn = screen.queryByRole('button')
    userEvent.click(checkoutBtn);
    const message = screen.queryByTestId('successMessage')
    expect(message).toBeInTheDocument();
});
