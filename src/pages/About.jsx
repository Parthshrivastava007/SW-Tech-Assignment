import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Users, Briefcase, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '50+', icon: Briefcase },
    { label: 'Happy Clients', value: '30+', icon: Users },
    { label: 'Years Experience', value: '3+', icon: Award },
    { label: 'Expert Team', value: '10+', icon: Users }
  ];

  const team = [
    { name: 'John Doe', role: 'Lead Developer', image: 'https://static.vecteezy.com/system/resources/thumbnails/034/585/785/small/ai-generative-confident-young-businessman-in-suit-standing-with-arms-folded-free-photo.jpg' },
    { name: 'Jane Smith', role: 'UI/UX Designer', image: 'https://thumbs.dreamstime.com/b/beautiful-smiling-businesswoman-arms-folded-standing-black-suit-brown-jacket-isolated-white-background-also-105189427.jpg' },
    { name: 'Alex Rivera', role: 'Project Manager', image: 'https://simongrimmett.wordpress.com/wp-content/uploads/2011/03/sg2_0827.jpg' }
  ];

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="py-24 relative overflow-hidden bg-slate-100 dark:bg-slate-950">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
          >
            About <span className="text-primary-400">Our Company</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We are a team of passionate developers and designers dedicated to building digital products that make an impact.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary-600/5 blur-[120px] -z-0" />
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                <p>
                  Founded in 2021, SW Technologies started with a simple vision: to bridge the gap between complex technology and business goals. We saw many entrepreneurs struggling with outdated digital tools and decided to provide a better way.
                </p>
                <p>
                  Today, we've grown into a full-service web development agency, helping businesses of all sizes establish a dominant online presence. Our journey is defined by the success of our clients and our commitment to technical excellence.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" alt="Meeting" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" />
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" alt="Office" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="pt-8 space-y-4">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Collab" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" />
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" alt="Team" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: idx * 0.1 
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <div className="relative p-8 rounded-3xl glass-dark border-white/10 text-center text-white">
                  <div className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors`}>
                    <stat.icon size={24} />
                  </div>
                  <div className="text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-primary-100 font-medium text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl glass border-white/5 group hover:border-primary-500/30 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-600/10 flex items-center justify-center text-primary-400 mb-8 group-hover:scale-110 transition-transform">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To empower businesses with high-quality, innovative web solutions that drive growth and create meaningful digital experiences for users worldwide.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl glass border-white/5 group hover:border-secondary-500/30 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary-600/10 flex items-center justify-center text-secondary-400 mb-8 group-hover:scale-110 transition-transform">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To become the global leader in digital transformation, known for our technical integrity, creative design, and commitment to client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-slate-400">The talented people behind SW Technologies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden glass border-white/5"
              >
                <div className="aspect-[3/4] relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-primary-400 font-medium">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
