import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Code, ShoppingCart, BarChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, idx }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
    >
      <div className="lg:w-1/2">
        <div className={`w-16 h-16 rounded-2xl bg-${service.color}-500/10 text-${service.color}-400 flex items-center justify-center mb-8`}>
          <service.icon size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">{service.title}</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
          {service.desc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {service.features.map((feature, fidx) => (
            <div key={fidx} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={20} className="text-primary-500" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold transition-all"
        >
          Get Started <ArrowRight size={20} />
        </Link>
      </div>

      <div 
        className="lg:w-1/2 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video rounded-3xl overflow-hidden glass border-slate-200 dark:border-white/10 shadow-2xl group cursor-pointer">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950"
              >
                <iframe
                  className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={`https://www.youtube.com/embed/${service.videoId}?autoplay=1&mute=1&loop=1&playlist=${service.videoId}&controls=0&rel=0&playsinline=1`}
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                ></iframe>
                <div className="absolute inset-0 bg-primary-950/20 z-10" />
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className={`w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
              <service.icon size={32} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const techs = ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS', 'Python', 'TypeScript', 'Docker'];
  const services = [
    {
      title: 'Website Design',
      icon: Monitor,
      desc: 'We create visually stunning and highly intuitive user interfaces that capture your brand essence and engage your visitors from the first click.',
      features: ['UI/UX Design', 'Responsive Layouts', 'Brand Identity', 'Prototype Design'],
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
      videoId: 'i9t8gdaBsTg'
    },
    {
      title: 'Website Development',
      icon: Code,
      desc: 'Our developers build robust, scalable, and high-performing websites using the latest technologies and frameworks for optimal speed and security.',
      features: ['Custom Web Apps', 'CMS Development', 'Performance Tuning', 'API Integration'],
      color: 'secondary',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      videoId: 'yqaLSlPOUxM'
    },
    {
      title: 'E-Commerce Development',
      icon: ShoppingCart,
      desc: 'We build feature-rich online stores that provide seamless shopping experiences, helping you sell more and manage your business effortlessly.',
      features: ['Payment Gateway', 'Inventory Mgmt', 'Multi-vendor Support', 'Customer Analytics'],
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      videoId: '-jfgfflCNE0'
    },
    {
      title: 'SEO & Digital Marketing',
      icon: BarChart,
      desc: 'Our data-driven marketing strategies and SEO techniques ensure your website ranks higher on search engines and reaches the right audience.',
      features: ['Keyword Research', 'On-Page SEO', 'Content Strategy', 'Social Media Ads'],
      color: 'secondary',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      videoId: 'MYE6T_gd7H0'
    }
  ];

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="py-24 relative overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-white/5">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-primary-600/20 text-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Code size={32} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            Our <span className="text-primary-400">Services</span>
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions engineered for growth and built with the latest industry standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-32">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </section>

      {/* Trust Section - Infinite Marquee */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/20 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-slate-900 dark:text-white"
          >
            Technologies We Use
          </motion.h2>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 20, 
              repeat: Infinity 
            }}
            className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
          >
            {[...techs, ...techs].map((tech, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 text-3xl md:text-5xl font-bold text-slate-400 dark:text-slate-700/50 hover:text-primary-500 dark:hover:text-primary-400 transition-all cursor-default group"
              >
                <span className="opacity-30 group-hover:opacity-100 transition-opacity">/</span>
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
