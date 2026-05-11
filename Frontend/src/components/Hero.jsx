import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const videoId = 'i_G9pE89jD8';
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 md:py-0 overflow-hidden isolate">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-950/70 z-10" /> {/* Overlay */}
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] min-w-full min-h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&playsinline=1&modestbranding=1&enablejsapi=1`}
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary-500/20"
          >
            <Sparkles size={16} className="text-primary-400" />
            <span className="text-sm font-medium text-primary-200">The Future of Web Development</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
          >
            Build Your Digital Empire With <span className="text-gradient">Precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We eager combine cutting-edge technology with world-class design to create high-performing websites that scale your business and captivate your audience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-primary-500/25 flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 -z-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
