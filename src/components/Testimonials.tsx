import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { QuoteIcon } from './Icons';

const testimonials = [
  {
    quote: "Die Zusammenarbeit mit Aegis Sicherheit war von Anfang an professionell und transparent. Ihr Team hat unser Firmenevent perfekt abgesichert. Absolute Empfehlung!",
    author: 'Markus Schmidt',
    company: 'CEO, Tech Solutions GmbH',
  },
  {
    quote: "Für den Schutz unserer Baustelle war Aegis die beste Wahl. Zuverlässig, proaktiv und immer erreichbar. Wir fühlten uns jederzeit sicher.",
    author: 'Julia Wagner',
    company: 'Projektleiterin, Bauprojekte AG',
  },
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-950 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Was unsere Kunden sagen</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Vertrauen und Zuverlässigkeit sind die Grundpfeiler unserer Arbeit.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-slate-800 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <QuoteIcon className="h-10 w-10 text-blue-500 dark:text-blue-600" />
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 text-lg italic">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-6">
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;