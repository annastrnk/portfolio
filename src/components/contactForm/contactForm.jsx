import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./contactForm.scss";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  subject: Yup.string().required("Please enter a subject"),
  message: Yup.string().required("Please enter a message"),
});

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setStatusMessage("");
    setSubmitting(true);
    
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setStatusType("success");
        resetForm();
      })
      .catch(() => {
        setStatusMessage("Something went wrong. Please try again later.");
        setStatusType("error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="contact-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <div className="contact-form-info">
              <div className="contact-form-info-item">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="YOUR NAME"
                  aria-label="Your name"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="contact-form-info-item">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="YOU@EXAMPLE.COM"
                  aria-label="Your email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
            </div>

            <Field
              type="text"
              id="subject"
              name="subject"
              placeholder="SUBJECT"
              className="field-subject"
              aria-label="Email subject"
            />
            <ErrorMessage name="subject" component="div" className="error" />

            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="WRITE YOUR MESSAGE HERE ..."
              aria-label="Your message"
            />
            <ErrorMessage name="message" component="div" className="error" />

            <button 
              className="bnt-submit" 
              type="submit"
              disabled={isSubmitting}
              aria-label="Send message"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>

      {statusMessage && (
        <div className={`status-message ${statusType}`}>{statusMessage}</div>
      )}
    </div>
  );
}
