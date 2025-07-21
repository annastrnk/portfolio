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

  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .send("service_j7gnuc5", "template_y8q5teh", values, "cOl0vnpXqyZlcAx6L")
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        setStatusType('success')
        resetForm();
      })
      .catch((error) => {
        console.error(error);
        setStatusMessage("❌ Something went wrong. Please try again later.");
        setStatusType("error")
      });
  };

  return (
    <div className="contact-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="contact-form">
          <div className="contact-form-info">
            <Field type="text" id="name" name="name" placeholder="Your name" />
            <ErrorMessage name="name" component="div" className="error" />

            <Field
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <Field
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="field-subject"
          />
          <ErrorMessage name="subject" component="div" className="error" />

          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Write your message here..."
          />
          <ErrorMessage name="message" component="div" className="error" />

          <button className="bnt-submit" type="submit">Send Message</button>
        </Form>
      </Formik>

      {statusMessage && (
        <div className={`status-message ${statusType}`}>
          {statusMessage}
        </div>
      )}
    </div>
  );
}
