"use client";

import React, { useState } from "react";
import Navbar from "../common/NavBar";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full">
        <div className="text-center">
          <svg
            className="mx-auto mb-4 w-16 h-16 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for reaching out! I'll get back to you as soon as
            possible.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-600"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset submission status
    setSubmissionStatus({
      isLoading: true,
      isSuccess: false,
      error: null,
    });

    try {
      // Option 1: Formspree (quick setup)
      const response = await fetch("https://formspree.io/f/mldekqgd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setSubmissionStatus({
          isLoading: false,
          isSuccess: true,
          error: null,
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmissionStatus({
        isLoading: false,
        isSuccess: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  const closeSuccessModal = () => {
    setSubmissionStatus((prev) => ({
      ...prev,
      isSuccess: false,
    }));
  };

  const socialLinks = [
    {
      icon: <img src="/icons/gmail.png" className="w-8 h-8" alt="Gmail icon" />,
      name: "Gmail",
      link: "mailto:ekoss.prog@gmail.com",
    },
    {
      icon: (
        <img
          src="/icons/telegram.png"
          className="w-8 h-8"
          alt="Telegram icon"
        />
      ),
      name: "Telegram",
      link: "https://t.me/evokss",
    },
    {
      icon: (
        <img
          src="/icons/linkedin.png"
          className="w-8 h-8"
          alt="LinkedIn icon"
        />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/evakoss/",
    },
    {
      icon: (
        <img src="/icons/github.png" className="w-8 h-8" alt="GitHub icon" />
      ),
      name: "GitHub",
      link: "https://github.com/evokss",
    },
  ];

  return (
    <>
      {/* Success Modal */}
      {submissionStatus.isSuccess && (
        <SuccessModal onClose={closeSuccessModal} />
      )}

      <Navbar />
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 dark:bg-gray-900 dark:text-white">
        <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row dark:shadow-none dark:border-2 dark:border-orange-400">
          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 p-8 bg-gray-50 dark:bg-gray-900 dark:text-white">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-rose-600">
              Let’s create something amazing together
            </h2>
            <p className="text-gray-600 mb-6 dark:text-slate-50">
              The perfect time to start is now. Let’s collaborate and turn your
              concepts into something exceptional—contact me today!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-rose-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-600 dark:text-gray-800"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-rose-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-600 dark:text-gray-800"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-rose-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-600 dark:text-gray-800"
                ></textarea>
              </div>
              {submissionStatus.error && (
                <div className="text-red-500 text-sm mb-4">
                  {submissionStatus.error}
                </div>
              )}
              <button
                type="submit"
                disabled={submissionStatus.isLoading}
                className={`w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 transition-colors duration-300 ${
                  submissionStatus.isLoading
                    ? "bg-rose-400 cursor-not-allowed"
                    : "bg-rose-600 hover:bg-rose-400"
                }`}
              >
                {submissionStatus.isLoading ? "Sending..." : "Send Message"}
              </button>
              {/* {submissionStatus.isSuccess && (
                <div className="text-green-600 text-sm mt-4">
                  Your message was sent successfully! I'll get back to you soon.
                </div>
              )} */}
            </form>
          </div>

          {/* Social Links Section */}
          <div className="w-full md:w-1/2 bg-orange-400 p-8 flex flex-col justify-center items-center text-white dark:text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in-out"
                >
                  {social.icon}
                  <span className="mt-2 text-sm">{social.name}</span>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm italic">
                "Creativity is intelligence having fun." - Albert Einstein
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
