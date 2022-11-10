import React from "react";
import "./ContactUsCss/style.css";
import { useFormik } from "formik";
import validationSchema from "./Validation";

function ContactForm() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>We’d love to hear from you</h1>
          <p>
            Choose the most convenient method and we’ll get back to you as soon
            as we can.{" "}
          </p>
          <div className="input">
            <label>Name</label>
            <input
              name="name"
              type="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />

            {errors.name && touched.name && (
              <div className="error">{errors.name}</div>
            )}
          </div>
          <div className="input">
            <label>Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />

            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}
          </div>
          <div className="input">
            <label>Subject</label>
            <input
              name="subject"
              onChange={handleChange}
              value={values.subject}
              onBlur={handleBlur}
            />

            {errors.subject && touched.subject && (
              <div className="error">{errors.subject}</div>
            )}
          </div>

          <div className="input">
            <label>Your Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              maxLength="101"
            />
            {errors.message && touched.message && (
              <div className="error">{errors.message}</div>
            )}
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="socials">
        <h1>Our Social Media Acounts</h1>
        <div className="info">
          <div className="tool">
            <i className="fa-solid fa-phone"></i>
            <p>+847 123 123 12 12</p>
          </div>
          <div className="tool">
            <i className="fa-regular fa-envelope"></i>
            <p>contact@trippy.com</p>
          </div>
          <div className="tool">
            <i className="fa-solid fa-location-dot"></i>
            <p>Lorem Street No:39/3, 34284, EU</p>
          </div>
          <div className="tool">
            <i className="fa-brands fa-instagram"></i>
            <p>instagram/trippy</p>
          </div>
          <div className="tool">
            <i className="fa-brands fa-twitter"></i>
            <p>twitter/trippytravel</p>
          </div>
          <div className="tool">
            <i className="fa-brands fa-youtube"></i>
            <p>youtube/trippy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
