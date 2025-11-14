import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Нормализуем позицию от -0.5 до 0.5
    const xPos = (clientX / innerWidth) - 0.5;
    const yPos = (clientY / innerHeight) - 0.5;

    // Устанавливаем силу эффекта
    const strength = 30; 
    setOffset({ x: -xPos * strength, y: -yPos * strength });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-slate-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/sicherheitskraft3.jpg" 
            alt="Professionelle Sicherheitskraft in einem modernen Gebäude"
            className="absolute inset-0 w-full h-full object-cover kenburns-effect"
          />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/50 dark:bg-black/40 z-1"></div>

      <div 
        className="relative z-10 text-center text-white px-4 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-4">
          <span className="block">
            {'Ihre Sicherheit.'.split(' ').map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 -mb-2">
                <span className="inline-block animate-word-reveal" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </span>
          <span className="block text-blue-500">
            {'Unsere Mission.'.split(' ').map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 -mb-2">
                <span className="inline-block animate-word-reveal" style={{ animationDelay: `${0.2 + (2 + i) * 0.15}s` }}>
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          Professioneller Schutz für Unternehmen und Privatpersonen. Wir bieten maßgeschneiderte Sicherheitslösungen, auf die Sie sich rund um die Uhr verlassen können.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/40 animate-fade-in-up"
          style={{ animationDelay: '1.1s' }}
        >
          Kostenloses Beratungsgespräch
        </a>
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        
        @keyframes word-reveal {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-word-reveal {
          transform: translateY(100%);
          animation: word-reveal 0.7s cubic-bezier(0.3, 0.8, 0.2, 1) forwards;
        }

        @keyframes kenburns-effect {
            0% { transform: scale(1) translate(0, 0); }
            100% { transform: scale(1.1) translate(-1%, 1%); }
        }
        .kenburns-effect { animation: kenburns-effect 20s ease-out infinite alternate; }
      `}</style>
    </section>
  );
};

export default Hero;