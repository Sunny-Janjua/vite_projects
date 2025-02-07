"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy is 30 days with a full refund.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to many countries.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking number provided in your confirmation email.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <>
      <div className="relative h-[90vh] flex items-center justify-center text-center">
        {/* Background Image with layout fill */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pexels-serpstat-177219-572056.jpg"
            alt="Flower Shop"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content with Animation */}
        <div className="max-w-3xl mx-auto px-4 space-y-6 animate-fade-in-up">
          <h4 className="text-lg font-semibold text-orange-600 uppercase animate-slide-up">
            Welcome to CW SUNNY ❤️❤️
          </h4>
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl animate-slide-up">
            Let's Make Beautiful Flowers a Part of Your Life.
          </h1>
          <p className="text-lg text-orange-700 sm:text-xl animate-slide-up">
            Explore a vibrant tapestry of blooms and arrangements that add
            color, fragrance, and elegance to your life. Discover the perfect
            floral expression for every moment and occasion.
          </p>
          <Link href="#" passHref>
            <button className="px-6 py-3 bg-orange-600 text-white text-lg font-medium rounded-md hover:bg-orange-700 transition-colors animate-bounce-in">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">123 Main St, Your City, Your Country</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-indigo-500 leading-relaxed"
                  href="mailto:example@email.com"
                >
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg shadow-lg">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We would love to hear from you! Share your thoughts or questions
              with us.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              We appreciate your feedback. Your message helps us improve our
              services.
            </p>
          </div>
        </div>
      </section>
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">
            Insurance FAQ
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>
        <ul className="basis-1/2">
          {faqs.map((faq, index) => (
            <li key={index}>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={expandedFAQ === index ? "true" : "false"}
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 text-base-content">{faq.question}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition duration-200 ease-out ${
                    expandedFAQ === index ? "rotate-90" : ""
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90"
                  ></rect>
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedFAQ === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <section className="h-screen bg-orange-950 flex items-center justify-center px-6 md:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 max-w-7xl w-full flex-wrap">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <Image
              alt="A vibrant floral arrangement on a special offer"
              src="/offer.jpg"
              height={500}
              width={500}
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h3
              id="cta-heading"
              className="text-2xl text-orange-500 font-semibold mb-3"
            >
              Limited Time Offer
            </h3>
            <h1
              id="cta-description"
              className="text-3xl md:text-4xl lg:text-5xl text-gray-200 font-bold leading-snug mb-6"
            >
              Explore Our Exquisite Floral Collections <br /> & Shop the Perfect
              Blooms
            </h1>
            <button
              className="bg-orange-600 hover:bg-orange-800 text-white font-semibold text-lg py-3 px-6 rounded-full shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
              aria-label="Click to explore floral collections and shop now"
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
