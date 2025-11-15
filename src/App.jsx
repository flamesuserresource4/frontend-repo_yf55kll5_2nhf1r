import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, ShieldCheck, Rocket, CheckCircle2, Star, ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with Spline cover */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Spline 3D background */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft gradient overlays for readability (do not block pointer events) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/30 to-slate-950"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950"></div>

        {/* Top Navigation */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <motion.a
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-xl font-bold text-white"
              >
                <Sparkles className="h-6 w-6 text-white" />
                BlueBiz
              </motion.a>

              <div className="hidden md:flex items-center gap-8 text-white/80">
                <a href="#features" className="hover:text-white transition">Features</a>
                <a href="#solutions" className="hover:text-white transition">Solutions</a>
                <a href="#pricing" className="hover:text-white transition">Pricing</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="hidden md:inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition"
                >
                  Talk to sales
                </a>
                <a
                  href="#get-started"
                  className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-[calc(90vh-5rem)] items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur"
              >
                <Star className="h-4 w-4 text-yellow-300" />
                Trusted by modern teams
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
              >
                Build a stunning business presence with motion-first design
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-6 max-w-2xl text-lg text-white/80"
              >
                Elevate your brand with an immersive 3D hero, delightful micro-interactions, and a conversion-optimized layout tailored for ambitious companies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row items-center gap-4"
              >
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition">
                  Start free trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 transition">
                  See features
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="relative bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-white/60 text-sm">Trusted by teams at</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 opacity-70">
            {['Acme', 'Nova', 'Aperture', 'Chronos', 'Pulse', 'Vertex'].map((brand) => (
              <div key={brand} className="flex items-center justify-center rounded-md border border-white/10 bg-white/5 py-3">
                <span className="text-white/70 text-sm font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Everything you need to grow your business
            </motion.h2>
            <p className="mt-4 text-white/70">
              A modern toolkit to showcase your product, capture leads, and convert visitors into customers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: TrendingUp, title: 'Conversion-ready', desc: 'Designed for outcomes with focused CTAs and clear value messaging.' },
              { icon: ShieldCheck, title: 'Enterprise-grade', desc: 'Accessible, fast, and reliable with best-in-class performance.' },
              { icon: Rocket, title: 'Motion-first', desc: 'Subtle animations and 3D visuals that elevate your brand experience.' },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions section */}
      <section id="solutions" className="relative bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">Tailored solutions for modern teams</h2>
              <p className="text-white/70">
                From product launches to service-based businesses, craft a high-impact presence that scales with your goals.
              </p>
              <ul className="space-y-3">
                {[
                  'Responsive layouts optimized for all devices',
                  'SEO-friendly structure with blazing-fast performance',
                  'Integrated contact and lead capture flows',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-300 transition">
                  Book a demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map((n) => (
                    <div key={n} className="rounded-xl border border-white/10 bg-white/5 p-6">
                      <div className="h-24 rounded-md bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-cyan-400/40"></div>
                      <p className="mt-3 text-sm text-white/70">Showcase your app screens with style</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative bg-slate-900/80 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h2>
            <p className="mt-3 text-white/70">Start free. Upgrade when you grow.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Starter', price: 'Free', features: ['Basic sections', 'Email capture', 'Community support'], cta: 'Get started' },
              { name: 'Growth', price: '$29/mo', features: ['All Starter', 'Advanced animations', 'Custom forms', 'Priority support'], cta: 'Choose Growth', highlight: true },
              { name: 'Scale', price: '$99/mo', features: ['All Growth', 'A/B tests', 'White-glove onboarding', 'SLAs'], cta: 'Go Scale' },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-2xl border ${plan.highlight ? 'border-emerald-400/40 bg-emerald-400/10' : 'border-white/10 bg-white/5'} p-6`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 right-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-slate-900">Most popular</div>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-2 text-3xl font-extrabold">{plan.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href="#contact" className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold transition ${plan.highlight ? 'bg-emerald-400 text-slate-900 hover:bg-emerald-300' : 'bg-white text-slate-900 hover:bg-slate-100'}`}>
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something remarkable</h2>
              <p className="mt-4 text-white/70">
                Tell us about your goals and we’ll craft a beautiful, high-converting site with motion that matches your brand.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-white/80">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-extrabold">+38%</p>
                  <p className="text-sm">Avg. conversion lift</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-extrabold">A+</p>
                  <p className="text-sm">Core Web Vitals</p>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">First name</label>
                    <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Last name</label>
                    <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-white/70">Work email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Project details</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Tell us what you’d like to build..." />
                </div>
                <button className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition">
                  Request proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">BlueBiz</span>
            </div>
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} BlueBiz Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
