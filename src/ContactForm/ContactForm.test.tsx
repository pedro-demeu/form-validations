import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'
import ContactForm from './ContactForm';

describe("<ContactForm />", () => {
  it("should validate fullName Input ", async () => {
    render(<ContactForm />)
    const fullNameInput = screen.getByLabelText(/Nome Completo/i);
    expect(fullNameInput).toBeInTheDocument;

    userEvent.type(fullNameInput, "");
    userEvent.click(screen.getByLabelText(/Idade/i));
    const validationMessage = await screen.findByText(/name is a required field/i);
    expect(validationMessage).toBeInTheDocument
  })

  it("should validate E-mail Input ", async () => {
    render(<ContactForm />)
    const emailInput = screen.getByLabelText('E-mail');
    expect(emailInput).toBeInTheDocument;

    fireEvent.change(emailInput, {
      target: {
        value: "pdemeu"
      }
    });
    fireEvent.change(screen.getByLabelText(/Idade/i), {
      target: {
        value: 1
      }
    });
    fireEvent.click(await screen.findByText("Enviar"))
    const validationMessage = await screen.findByText(/email must be a valid email/i);
    expect(validationMessage).toBeInTheDocument
  })
  it("should validate 'Age Input' ", async () => {
    render(<ContactForm />)
    const ageInput = screen.getByLabelText('Idade');
    expect(ageInput).toBeInTheDocument;

    fireEvent.change(ageInput, {
      target: {
        value: 0
      }
    });
    fireEvent.change(screen.getByLabelText(/E-mail/i), {
      target: {
        value: "pdemeu@gmail.com"
      }
    });
    fireEvent.click(await screen.findByText("Enviar"))
    const validationMessage = await screen.findByText(/age must be a positive number/i);
    expect(validationMessage).toBeInTheDocument
  })
  it("should validate 'Telephone Input' ", async () => {
    render(<ContactForm />)
    const telephoneInput = screen.getByLabelText('Número do Whatsapp');
    expect(telephoneInput).toBeInTheDocument;

    fireEvent.change(telephoneInput, {
      target: {
        value: 1234
      }
    });
    fireEvent.change(screen.getByLabelText(/E-mail/i), {
      target: {
        value: "pdemeu@gmail.com"
      }
    });
    fireEvent.click(await screen.findByText("Enviar"))
    const validationMessage = await screen.findByText(/Phone number is not valid/i);
    expect(validationMessage).toBeInTheDocument
  })
  it("should validate 'Message Input' ", async () => {
    render(<ContactForm />)
    const messageInput = screen.getByLabelText('Mensagem');
    expect(messageInput).toBeInTheDocument;

    fireEvent.change(messageInput, {
      target: {
        value: ""
      }
    });
    fireEvent.change(screen.getByLabelText(/E-mail/i), {
      target: {
        value: "pdemeu@gmail.com"
      }
    });
    fireEvent.click(await screen.findByText("Enviar"))
    const validationMessage = await screen.findByText(/msg is a required field/i);
    expect(validationMessage).toBeInTheDocument
  })
})