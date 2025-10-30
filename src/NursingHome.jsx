import React from 'react';
import { motion } from 'framer-motion';

export default function NursingHomeHome() {
  const staff = [
    { name: 'Maya Santos', role: 'Head Nurse', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60' },
    { name: 'Carlos Reyes', role: 'Activities Lead', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=60' },
    { name: 'Elaine Cruz', role: 'Physical Therapist', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=60' },
  ];

  const services = [
    { title: '24/7 Nursing Care', desc: 'Skilled, compassionate nursing staff available round the clock.' },
    { title: 'Rehab & Therapy', desc: 'Personalized physical, occupational and speech therapy programs.' },
    { title: 'Memory Support', desc: 'Structured memory care with safe, calming routines.' },
  ];

  const testimonials = [
    { by: 'L. Navarro — Daughter', text: 'They treated my mother like family. The kindness and attention were constant.' },
    { by: 'J. Gomez — Resident', text: 'I feel safe, seen, and more energetic than before. I love the garden!' },
  ];

  return (
    <main className="min-h-screen bg-neutral text-text antialiased">
      {/* NAV */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl2 bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c.88 0 1.6-.72 1.6-1.6V7.6A1.6 1.6 0 0012 6H7.6A1.6 1.6 0 006 7.6v3.8A1.6 1.6 0 007.6 13H12z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Sunrise Haven Care</h1>
              <p className="text-xs text-muted">Compassionate care, gentle living</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#services">Services</a>
            <a className="hover:underline" href="#team">Team</a>
            <a className="hover:underline" href="#contact">Contact</a>
            <a href="#visit" className="ml-2 inline-block bg-primary text-white px-4 py-2 rounded-xl2 shadow-md">Schedule a Visit</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold leading-tight">
              A warm, safe space for your loved ones
            </motion.h2>
            <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-muted max-w-xl">
              "I attribute my success to this — I never gave or took any excuse." — Florence Nightingale
            </motion.p>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 flex gap-3">
              <a href="#visit" className="inline-block bg-secondary text-white px-5 py-3 rounded-xl2 shadow-card font-medium">Book a Tour</a>
              <a href="#services" className="inline-block border border-secondary px-5 py-3 rounded-xl2 text-secondary">Explore Services</a>
            </motion.div>

            <div className="mt-8">
              <dl className="grid grid-cols-3 gap-4 text-sm text-muted">
                <dt className="font-semibold">24/7 Care</dt>
                <dd>Licensed nurses on-site</dd>
                <dt className="font-semibold">Private Rooms</dt>
                <dd>Comfort-forward design</dd>
                <dt className="font-semibold">Therapy Programs</dt>
                <dd>Personalized plans</dd>
              </dl>
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="rounded-xl2 shadow-2xl overflow-hidden">
              <img alt="sunrise garden" className="w-full h-72 md:h-[420px] object-cover" src="https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1400&q=60" />
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl2 shadow-overlay w-[calc(100%-3rem)] md:w-72">
              <h3 className="font-semibold">Daily Activities</h3>
              <p className="text-sm text-muted mt-1">Gentle exercises, art classes, and garden time—planned to boost joy and mobility.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT + SERVICES */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">About Sunrise Haven</h3>
            <p className="mt-3 text-muted">We believe dignity, comfort, and connection matter. Our care philosophy centers the whole person—physical, emotional, and social needs are met with warmth.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <li key={s.title} className="p-4 bg-white rounded-xl2 shadow-card">
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm text-muted mt-1">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-xl2 overflow-hidden shadow-card">
              <img alt="therapy" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1551601651-4a1b62cf2f3b?w=1400&q=60" />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Meet our team</h3>
          <p className="text-muted mt-2">A small, steady team—trained, certified, and kind.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {staff.map((p, i) => (
              <motion.article key={p.name} initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="p-4 bg-white rounded-xl2 shadow-card">
                <img alt={p.name} className="w-full h-40 object-cover rounded-xl2" src={p.img} />
                <div className="mt-3">
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="text-sm text-muted">{p.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">What families say</h3>
            <div className="mt-4 space-y-4">
              {testimonials.map((t, i) => (
                <motion.blockquote key={i} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="p-4 bg-white rounded-xl2 shadow-card">
                  <p className="text-text">“{t.text}”</p>
                  <footer className="mt-2 text-sm text-muted">— {t.by}</footer>
                </motion.blockquote>
              ))}
            </div>
          </div>

          <div className="p-6 bg-primary/10 rounded-xl2 shadow-card">
            <h4 className="font-semibold">Ready to visit?</h4>
            <p className="text-muted mt-2">Schedule a private tour, meet the team, and see the rooms.</p>
            <a id="visit" href="#contact" className="mt-4 inline-block bg-primary text-white px-4 py-3 rounded-xl2 shadow-card">Schedule a Visit</a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-white py-12 rounded-2xl p-10 shadow-lg">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-xl font-bold">Get in touch</h3>
          <p className="text-muted mt-2">Call, email, or fill the form below and our care coordinator will reply within one business day.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks — we will contact you shortly!') }}>
            <input aria-label="Full name" required placeholder="Full name" className="p-3 rounded-xl2 border" />
            <input aria-label="Phone or email" required placeholder="Phone or email" className="p-3 rounded-xl2 border" />
            <textarea aria-label="Message" placeholder="How can we help?" className="p-3 rounded-xl2 border md:col-span-2" rows={4}></textarea>
            <button type="submit" className="md:col-span-2 bg-secondary text-white px-4 py-3 rounded-xl2">Send message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white/20 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Sunrise Haven Care — All rights reserved.</p>
          <div className="text-sm text-muted">123 Garden Way, Hometown · (555) 123-4567 · hello@sunrisehaven.example</div>
        </div>
      </footer>
    </main>
  );
}
