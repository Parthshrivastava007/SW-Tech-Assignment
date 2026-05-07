import { motion } from 'framer-motion';
import { Monitor, Code, ShoppingCart, Search, Zap, Shield, Users, Trophy } from 'lucide-react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Web Design',
      desc: 'Stunning, user-centric designs that capture your brand essence.',
      icon: Monitor,
      color: 'primary'
    },
    {
      title: 'Web Development',
      desc: 'High-performance, scalable web applications built with modern stacks.',
      icon: Code,
      color: 'secondary'
    },
    {
      title: 'E-Commerce',
      desc: 'Feature-rich online stores designed to convert visitors into customers.',
      icon: ShoppingCart,
      color: 'primary'
    },
    {
      title: 'SEO & Marketing',
      desc: 'Strategic optimization to help your business rank higher and grow faster.',
      icon: Search,
      color: 'secondary'
    }
  ];

  const features = [
    { title: 'Lightning Fast', desc: 'Optimized performance for sub-second loading.', icon: Zap },
    { title: 'Secure & Reliable', desc: 'Built with the latest security best practices.', icon: Shield },
    { title: 'Expert Team', desc: 'Years of industry experience at your service.', icon: Users },
    { title: 'Result Oriented', desc: 'Focus on ROI and business growth metrics.', icon: Trophy }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow',
      content: 'SW Technologies transformed our online presence. Their attention to detail and technical expertise is unmatched.',
      image: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, EcoShop',
      content: 'The e-commerce site they built for us is fast, intuitive, and has significantly increased our conversion rate.',
      image: 'https://i.pravatar.cc/150?u=michael'
    }
  ];

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We provide comprehensive digital solutions tailored to your unique business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300 border-white/5 hover:border-primary-500/50"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${service.color}-500/10 text-${service.color}-400 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-primary-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-display font-bold text-white mb-6">Why Partner With Us?</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                We don't just build websites; we build growth engines. Our approach combines technical excellence with a deep understanding of business strategy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary-600/10 flex items-center justify-center text-primary-400">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Our Team" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-600/20 blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-slate-400">What our clients say about working with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl glass border-white/5"
              >
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary-500/20" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center bg-gradient-to-br from-slate-800 to-slate-950">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Ready to Start Your Project?</h2>
              <p className="text-primary-100 text-lg mb-10">Let's collaborate to build something extraordinary. Get in touch today for a free consultation.</p>
              <Link to="/contact" className="inline-flex bg-white text-primary-600 hover:bg-slate-100 px-10 py-4 rounded-xl font-bold transition-all shadow-xl">
                Get a Free Quote
              </Link>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900/20 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal Helper
const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export default Home;
