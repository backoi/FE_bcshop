import { useState } from "react";

const HelpPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, simply browse our collection, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details to complete your purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, American Express, PayPal, and Apple Pay. All payments are processed securely through our encrypted payment gateway.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary based on your location and the shipping method selected. Standard shipping typically takes 5-7 business days, express takes 3-5 days, and priority shipping arrives in 1-2 business days.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. Additional customs fees may apply depending on your country's import regulations.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of delivery for unopened and undamaged products. Please contact our customer service team to initiate a return and receive a return authorization number.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with tracking information. You can also check your order status by logging into your account on our website.",
    },
    {
      question: "Are the model kits pre-assembled?",
      answer:
        "No, all our model kits require assembly unless otherwise specified in the product description. Skill levels vary from beginner to expert, so please check the product details before purchasing.",
    },
    {
      question: "Do you offer replacement parts?",
      answer:
        "Yes, we can provide replacement parts for most kits. Please contact our customer service with your order number and details about the missing or damaged part.",
    },
  ];

  const popularTopics = [
    { title: "Assembly Guides", icon: "fas fa-tools", link: "#" },
    { title: "Painting Techniques", icon: "fas fa-paint-brush", link: "#" },
    { title: "Scale References", icon: "fas fa-ruler-combined", link: "#" },
    { title: "Model Care", icon: "fas fa-shield-alt", link: "#" },
    { title: "Gift Cards", icon: "fas fa-gift", link: "#" },
    { title: "Wholesale Inquiries", icon: "fas fa-store", link: "#" },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <i className="fas fa-rocket mr-2"></i>
            ScaleModelWorld
          </h1>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-yellow-300 transition">
              <i className="fas fa-user text-xl"></i>
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <i className="fas fa-shopping-cart text-xl"></i>
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <i className="fas fa-home text-xl"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3 px-6">
        <div className="container mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li className="text-gray-700">Help Center</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find answers to common questions or contact our support team for
            assistance.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full py-4 px-6 rounded-lg text-gray-800 focus:outline-none search-box"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 md:px-6">
        {/* Popular Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Popular Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center"
              >
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <i className={`${topic.icon} text-xl`}></i>
                </div>
                <span className="font-medium text-gray-800">{topic.title}</span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="accordion-item">
                  <div
                    className="accordion-header p-5 flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    <i
                      className={`fas ${
                        activeAccordion === index ? "fa-minus" : "fa-plus"
                      } text-gray-500`}
                    ></i>
                  </div>
                  <div
                    className={`accordion-content px-5 pb-5 text-gray-600 ${
                      activeAccordion === index ? "show" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500">
                  Try different search terms or browse our popular topics above
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="md:flex items-start justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Still need help?
              </h2>
              <p className="text-gray-600 mb-6">
                Our customer support team is available 7 days a week to assist
                you with any questions or concerns.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Call Us</h4>
                    <p className="text-gray-600">+1 (800) 555-MODEL</p>
                    <p className="text-sm text-gray-500">
                      Monday-Friday, 9am-6pm EST
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email Us</h4>
                    <p className="text-gray-600">support@scalemodelworld.com</p>
                    <p className="text-sm text-gray-500">
                      Typically respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-comment-dots"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Live Chat</h4>
                    <p className="text-gray-600">Available on our website</p>
                    <p className="text-sm text-gray-500">
                      Monday-Friday, 9am-5pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4 text-gray-800">
                Send us a message
              </h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Inquiry</option>
                    <option value="shipping">Shipping Question</option>
                    <option value="return">Return Request</option>
                    <option value="product">Product Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ScaleModelWorld</h3>
              <p className="text-gray-400">
                Your premier destination for high-quality scale models and hobby
                supplies since 2010.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    On Sale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-xl"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-xl"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <p className="text-gray-400">
                Subscribe to our newsletter for updates and special offers.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2023 ScaleModelWorld. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpPage;
