import React, { useState } from "react";

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Normalize position from -0.5 to 0.5
    const xPos = clientX / innerWidth - 0.5;
    const yPos = clientY / innerHeight - 0.5;

    // Set effect strength
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
  
  <video
    src="/heroVideo-mobile.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover md:hidden"
  ></video>

  <video
    src="/heroVideo-desktop.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover hidden md:block"
  ></video>
</div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 100 100'%3E%3Ctext x='50' y='50' font-size='50' fill='rgba(255,255,255,0.03)' text-anchor='middle' dominant-baseline='middle'%3E♠%3C/text%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-1"></div>

      <div
        className="relative z-10 text-center text-white px-4 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="block text-gray-200">
            {"Es ist immer schön, ein".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 -mb-2">
                <span
                  className="inline-block animate-word-reveal"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </span>
          <span className="block">
            <span className="inline-block overflow-hidden pb-2 -mb-2">
              <span
                className="inline-block animate-word-reveal text-blue-400"
                style={{ animationDelay: `0.8s` }}
              >
                ASS&nbsp;
              </span>
            </span>
            {"im Ärmel zu haben.".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 -mb-2">
                <span
                  className="inline-block animate-word-reveal"
                  style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </span>
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up"
          style={{ animationDelay: "1.4s" }}
        >
          Professioneller Schutz, auf den Sie sich verlassen können. Ihre
          Sicherheit ist unser höchster Trumpf.
        </p>

        <a
          href="#contact"
          className="btn-shine relative inline-block py-3 px-6 sm:px-8 bg-blue-600 text-white uppercase font-bold tracking-[1.5px] rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "1.6s" }}
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
          from { transform: translateY(110%); }
          to { transform: translateY(0); }
        }
        .animate-word-reveal {
          transform: translateY(110%);
          animation: word-reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
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
