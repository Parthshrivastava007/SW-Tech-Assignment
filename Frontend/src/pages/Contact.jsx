import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import API_URL from '../api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone is required";
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const res = await fetch(`${API_URL}/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (res.ok) {
          setSubmitted(true);
          toast.success('Message sent successfully!');
          setTimeout(() => setSubmitted(false), 5000);
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } else {
          const data = await res.json();
          toast.error(data.message || 'Something went wrong');
        }
      } catch (err) {
        toast.error('Failed to send message. Please check your connection.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '+91-8933942662', color: 'primary' },
    { icon: Mail, label: 'Email Us', value: 'info@socialwavez.com', color: 'secondary' },
    { icon: MapPin, label: 'Visit Us', value: 'D14, Pocket 14, Sector 8D, Rohini, New Delhi, Delhi, 110085', color: 'primary' }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 relative overflow-hidden bg-slate-100 dark:bg-slate-950">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Get In <span className="text-primary-400">Touch</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can help you achieve your digital goals.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-8">
                  {contactInfo.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-6 group"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 text-${item.color}-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <item.icon size={28} />
                      </div>
                      <div>
                        <h4 className="text-slate-600 dark:text-slate-500 font-medium mb-1">{item.label}</h4>
                        <p className="text-slate-900 dark:text-white text-xl font-bold">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl overflow-hidden h-80 glass border-white/5"
              >
                <iframe
                  title="office-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0343!2d77.1211!3d28.7058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e026b36a47%3A0x6f4b3a976d6f36df!2sPocket+14%2C+Sector+8D%2C+Rohini%2C+Delhi%2C+110085!5e0!3m2!1sen!2sin!4v1715082100000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl glass border-white/5 relative"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors`}
                        placeholder="Project Inquiry"
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors`}
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20 disabled:opacity-70"
                  >
                    {isSubmitting ? <Loader size="sm" /> : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
