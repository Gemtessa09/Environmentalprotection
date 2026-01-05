import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaPhone, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(t('thankYou'));
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactCards = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: t('emailUs'),
      content: "environment@haramaya.edu.et",
      link: "mailto:environment@haramaya.edu.et",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: t('callUs'),
      content: "+251-XXX-XXXX",
      link: "tel:+251-XXX-XXXX",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: t('visitUs'),
      content: t('haramayaCampus'),
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: t('officeHours'),
      content: t('officeHoursText'),
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", link: "https://www.facebook.com", color: "hover:text-blue-600" },
    { icon: <FaYoutube />, name: "YouTube", link: "https://www.youtube.com", color: "hover:text-red-600" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com", color: "hover:text-pink-600" },
    { icon: <FaTwitter />, name: "Twitter", link: "https://www.twitter.com", color: "hover:text-blue-400" },
    { icon: <FaGithub />, name: "GitHub", link: "https://github.com", color: "hover:text-gray-800" },
    { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com", color: "hover:text-blue-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/30 backdrop-blur-sm">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-20"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white border border-white/20"
          >
            <FaPaperPlane className="mr-2" />
            {t('contactTitle')}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-4xl font-extrabold text-white md:text-6xl"
          >
            {t('contactSubtitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 max-w-2xl mx-auto text-xl text-white/90"
          >
            {t('contactDescription')}
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
            {t('reachOut')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-3">{card.content}</p>
                {card.link !== "#" && (
                  <a
                    href={card.link}
                    className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${card.color} bg-clip-text text-transparent hover:underline`}
                  >
                    {t('contactUs')}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('sendMessage')}</h2>
              <p className="text-gray-600">
                {t('contactFormDescription')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('subject')}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    {t('sending')}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FaPaperPlane className="mr-2" />
                    {t('sendMessageBtn')}
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Media & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <p className="text-gray-600 mb-6">
                Stay connected with our latest environmental initiatives and events.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200 ${social.color}`}
                  >
                    <span className="text-2xl mr-3">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">{t('whyContact')}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>{t('joinInitiatives')}</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>{t('partnerWorkshops')}</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>{t('expertAdvice')}</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>{t('collaborateProjects')}</p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Map</h3>
              <div className="aspect-square md:aspect-video w-full overflow-hidden rounded-xl shadow-inner border border-gray-200 relative group">
                <iframe 
                  title="Haramaya University Map"
                  width="100%" 
                  height="100%" 
                  id="gmap_canvas" 
                  src="https://maps.google.com/maps?q=Haramaya%20University&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0"
                  className="filter grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-xl"></div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500 font-medium flex items-center justify-center">
                <FaMapMarkerAlt className="mr-2 text-emerald-600 animate-bounce" />
                Haramaya University Main Campus
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
