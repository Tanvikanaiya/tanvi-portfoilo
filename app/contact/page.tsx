import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_i3no68p", // Your Service ID
      "template_yefm5u5", // Your Template ID
      formData,
      "aX-ciqNXSdRvWXvBhcyWU" // Your Public Key
    )
    .then(() => setStatus("✅ Message sent successfully!"))
    .catch(() => setStatus("❌ Failed to send message. Please try again."));
  };

  return (
    <section className="section container">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 card">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border rounded-lg p-3"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-soft hover:bg-blue-700">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-lg">{status}</p>}
    </section>
  );
}
