import { useState } from "react";


const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsModalOpen(true);

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setIsModalOpen(false); // Close modal after 3 seconds
    }, 3000);
  };

  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-gray-100 min-h-screen">
      <div className="max-w-screen-md mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8 text-lg">
          We'd love to hear from you. Please send us a message using the form below.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Get in Touch</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Message"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Congratulations!</h2>
            <p>Your form has been sent successfully. We will get back to you shortly.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="text-center mt-10 text-sm">
        <p>© 2024 CLONED IGEODDA Inc | All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default ContactUs;
