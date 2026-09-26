import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ExternalLink, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  darkMode: boolean;
}

export function ContactSection({ darkMode }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'C-Suite Pitch Deck',
    timeline: 'Immediate / Urgent (< 1 week)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
            <MessageSquare size={14} />
            <span>Initiate Collaboration</span>
            <span aria-hidden="true">·</span>
            <span>Direct Access</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-950'
            }`}
          >
            Let&apos;s Build Your Next Winning Presentation
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Available for executive pitch decks, enterprise template design systems, financial data visualization engagements, and strategic consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center border border-amber-400/20">
                  <Mail size={20} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg border border-neutral-700 hover:bg-neutral-800 text-neutral-300 flex items-center gap-1 transition-colors"
                >
                  {copiedEmail ? <CheckCircle2 size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-neutral-400 font-mono mb-1">Direct Email Address</p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold font-mono hover:text-amber-400 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone Card */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 text-sky-400 flex items-center justify-center border border-sky-400/20">
                  <Phone size={20} />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg border border-neutral-700 hover:bg-neutral-800 text-neutral-300 flex items-center gap-1 transition-colors"
                >
                  {copiedPhone ? <CheckCircle2 size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-neutral-400 font-mono mb-1">Direct Telephone / Mobile</p>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-base sm:text-lg font-bold font-mono hover:text-amber-400 transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Location & LinkedIn Card */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-400/10 text-indigo-400 flex items-center justify-center border border-indigo-400/20 mb-3">
                <MapPin size={20} />
              </div>
              <p className="text-xs text-neutral-400 font-mono mb-1">Primary Location</p>
              <p className="text-base font-semibold mb-4">
                {PERSONAL_INFO.location}
              </p>

              <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Professional Network</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Assurance Box */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 text-xs ${
              darkMode ? 'bg-neutral-900/20 border-neutral-800 text-neutral-400' : 'bg-neutral-50 border-neutral-200 text-neutral-600'
            }`}>
              <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
              <span>Strict Non-Disclosure (NDA) and confidential material handling guaranteed.</span>
            </div>

          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 sm:p-10 rounded-3xl border transition-all shadow-xl ${
                darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-200 shadow-neutral-200/50'
              }`}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Henderson"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                          darkMode
                            ? 'bg-neutral-950 border-neutral-800 text-white focus:border-amber-400'
                            : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-amber-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@organization.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                          darkMode
                            ? 'bg-neutral-950 border-neutral-800 text-white focus:border-amber-400'
                            : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-amber-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Company or Fund Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Strategic Capital"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                          darkMode
                            ? 'bg-neutral-950 border-neutral-800 text-white focus:border-amber-400'
                            : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-amber-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Required Service Focus
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                          darkMode
                            ? 'bg-neutral-950 border-neutral-800 text-white focus:border-amber-400'
                            : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-amber-500'
                        }`}
                      >
                        <option value="C-Suite Pitch Deck">C-Suite Pitch Deck (Investor / M&amp;A)</option>
                        <option value="Corporate Master Template">Corporate Master Slide System</option>
                        <option value="Think-cell Financial Viz">Think-cell &amp; Financial Charts</option>
                        <option value="Adobe Collateral">Adobe InDesign / Illustrator Collateral</option>
                        <option value="Executive Retainer">Senior Presentation Retainer / QC</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Project Scope &amp; Key Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline slide count, timeline, branding guidelines or data source (e.g. 25-slide board deck with waterfall financial models needed by next Thursday)..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none ${
                        darkMode
                          ? 'bg-neutral-950 border-neutral-800 text-white focus:border-amber-400'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-amber-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Presentation Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold font-display">Inquiry Received</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been logged. Jeffin will review your requirements and respond within 12 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          service: 'C-Suite Pitch Deck',
                          timeline: 'Immediate / Urgent (< 1 week)',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-700 hover:bg-neutral-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
