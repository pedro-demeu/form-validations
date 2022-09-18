import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'
import ContactForm from './ContactForm';

describe("<ContactForm />", () => {
  it("should validate fullName Input ", () => {
    render(
      <div>Hello</div>
    )
  })

  // it("should validate 'E-mail Input' ", async () => {
  //   render(<ContactForm />);
  //   const emailInput = screen.getByLabelText(/e-mail/i);
  //   userEvent.type(emailInput, "{tab}");

  //   const validationMessage = await screen.findByText(/email is a required field/i);
  //   expect(validationMessage).toBeInTheDocument();

  //   userEvent.type(emailInput, "pdemeu@gmail.com");
  //   expect(validationMessage).not.toBeInTheDocument();


  // })
  // it("should validate 'Age Input' ", () => {

  // })
  // it("should validate 'Telephone Input' ", () => {

  // })
  // it("should validate 'Message Input' ", () => {

  // })
  // it.todo("should save form when send button was clicked!")
})