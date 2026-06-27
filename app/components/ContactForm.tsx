'use client';

import { useMemo } from 'react';

export interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  form: FormState;
  onFormChange: (field: keyof FormState, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  successMessage: string;
  contactEmail: string;
}

export function ContactForm({ form, onFormChange, onSubmit, successMessage, contactEmail }: ContactFormProps) {
  const emailTemplate = useMemo(() => {
    return `Dear Royal Luxury Rent a Car team,

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}

I would like to book a luxury car rental from Islamabad with your team. Please contact me with available packages and pricing.

Thank you,
${form.name || 'Customer'}`;
  }, [form]);

  return (
    <section id="contact" className="section section-contact" data-animate>
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">Contact Us</span>
          <h2>Ready to reserve your luxury ride?</h2>
          <p>
            Complete the form and our team will respond with a custom quote, availability, and booking details.
          </p>
          <div className="contact-summary">
            <div>
              <strong>Fast response</strong>
              <span>24/7 WhatsApp support</span>
            </div>
            <div>
              <strong>Luxury fleet</strong>
              <span>Premium vehicles ready</span>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-form panel">
          <label>
            Name
            <input
              required
              value={form.name}
              onChange={(event) => onFormChange('name', event.target.value)}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => onFormChange('email', event.target.value)}
              placeholder="Your email"
            />
          </label>
          <label>
            Phone
            <input
              required
              value={form.phone}
              onChange={(event) => onFormChange('phone', event.target.value)}
              placeholder="WhatsApp / Phone number"
            />
          </label>
          <label>
            Message / Car request
            <textarea
              required
              value={form.message}
              onChange={(event) => onFormChange('message', event.target.value)}
              placeholder="Tell us what you need"
            />
          </label>
          <button type="submit" className="button button-primary submit-button">
            Send Request
          </button>
          {successMessage && (
            <div className="success-card" data-animate>
              <h3>Request Submitted</h3>
              <p>{successMessage}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
