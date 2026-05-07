import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import logo from '../assets/logo.png';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 pt-20 pb-10 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Brand */}
        <motion.div variants={itemVariants} className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="SW Technologies Logo" className="h-8 w-auto object-contain" />
            <span className="text-xl font-display font-bold text-slate-900 dark:text-white">
              <span className="text-primary-400">Technologies</span>
            </span>
          </Link>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Building the next generation of digital experiences. We help businesses grow with modern web solutions.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: FaInstagram, color: '#E4405F', name: 'Instagram' },
              { Icon: FaWhatsapp, color: '#25D366', name: 'WhatsApp' },
              { Icon: FaXTwitter, color: '#000000', name: 'X' },
              { Icon: FaYoutube, color: '#FF0000', name: 'YouTube' },
              { Icon: FaLinkedin, color: '#0077B5', name: 'LinkedIn' }
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-110"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.boxShadow = `0 0 15px ${social.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-all duration-300 flex items-center group gap-2"
                >
                  <span className="w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-4" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            {['Web Design', 'Web Development', 'E-Commerce', 'SEO'].map((item) => (
              <li key={item}>
                <Link 
                  to="/services" 
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-all duration-300 flex items-center group gap-2"
                >
                  <span className="w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-4" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h4 className="text-slate-900 dark:text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
              <MapPin size={20} className="text-primary-400 shrink-0" />
              <span>D14, Pocket 14, Sector 8D, Rohini, New Delhi, Delhi, 110085</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <Phone size={20} className="text-primary-400 shrink-0" />
              <span>+91 8933942662</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <Mail size={20} className="text-primary-400 shrink-0" />
              <span>info@socialwavez.com</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-6 mt-20 pt-8 border-t border-slate-200 dark:border-white/5 text-center text-slate-500 text-sm"
      >
        <p>© {new Date().getFullYear()} SW Technologies. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
