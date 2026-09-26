import { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Check, Copy, ExternalLink, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES, CAREER_HIGHLIGHTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export function ResumeModal({ isOpen, onClose, darkMode }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl flex flex-col ${
          darkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-100' : 'bg-white border-neutral-300 text-neutral-900'
        }`}
      >
        {/* Modal Top Actions */}
        <div className="sticky top-0 z-20 px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span>Curriculum Vitae · Official Document</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-700 hover:bg-neutral-800 text-neutral-200 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center gap-1.5 transition-colors"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close CV preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div id="printable-resume" className="p-6 sm:p-10 space-y-8">
          
          {/* Resume Header */}
          <div className="border-b border-neutral-800 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-1">
                JEFFIN J KATTAMPALLY
              </h1>
              <p className="text-lg font-semibold text-amber-400 font-display">
                Senior PowerPoint Designer &amp; Presentation Specialist
              </p>
              <p className="text-xs font-mono text-neutral-400 mt-2">
                13+ Years Corporate Design Experience · London On-Site Deployed
              </p>
            </div>

            {/* Contact Details Column */}
            <div className="text-xs font-mono space-y-1.5 text-neutral-300 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin size={13} className="text-amber-400" />
                <span>Kuravilangad, Kottayam (Dt), Kerala</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone size={13} className="text-amber-400" />
                <span>+91 9496034951</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail size={13} className="text-amber-400" />
                <span>jeffinkattampally@gmail.com</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5 text-sky-400">
                <ExternalLink size={13} />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>

          {/* Section: Experience */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400 border-b border-neutral-800 pb-2 mb-4">
              Work Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.company}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-bold font-display text-white">
                      {exp.designation} — <span className="text-amber-400">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-neutral-400 mb-2">{exp.overview}</p>
                  <ul className="list-disc list-inside text-xs text-neutral-300 space-y-1 pl-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Career Highlights */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400 border-b border-neutral-800 pb-2 mb-3">
              Career Highlights &amp; Honors
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-200">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▶</span> Got an opportunity to visit On-site (London)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▶</span> Passed Skill level 3 in Graphics design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▶</span> Got Performance Awards for best performance of the quarter
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▶</span> Got Award for most number of client feedback
              </li>
            </ul>
          </div>

          {/* Section: Software Skills */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400 border-b border-neutral-800 pb-2 mb-3">
              Software &amp; Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-neutral-300">
              <div>• PowerPoint Presentation</div>
              <div>• MS Word</div>
              <div>• Think-cell (Financial Charts)</div>
              <div>• Adobe Illustrator</div>
              <div>• Adobe Photoshop</div>
              <div>• Adobe InDesign</div>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400 border-b border-neutral-800 pb-2 mb-3">
              Education
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold text-white">
                  <span>B.Sc I.T (Information Technology)</span>
                  <span className="text-neutral-400 font-mono">2011</span>
                </div>
                <p className="text-neutral-400">AJK College of Arts and Science, Coimbatore, Tamil Nadu</p>
              </div>
              <div>
                <div className="flex justify-between font-bold text-white">
                  <span>Plus Two (Higher Secondary)</span>
                  <span className="text-neutral-400 font-mono">2008</span>
                </div>
                <p className="text-neutral-400">Govt. Boys HSS, Palakkad, Kerala</p>
              </div>
            </div>
          </div>

          {/* Section: Declaration */}
          <div className="pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <p className="italic">
                &quot;I hereby declare that the information furnished above is true to the best of my knowledge.&quot;
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-white">Jeffin J Kattampally</p>
              <p>Kuravilangad, Kerala</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
