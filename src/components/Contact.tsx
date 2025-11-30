import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MailIcon, PhoneIcon, SpinnerIcon, CheckIcon, LocationIcon } from './Icons';
import { CinematicText } from './ui/cinematic-text';

interface FormState { name: string; email: string; phone: string; message: string; }
interface FormErrors { name?: string; email?: string; phone?: string; message?: string; }

const InputField = ({ name, type = 'text', label, value, error, onChange }: { name: keyof FormState; type?: string; label: string; value: string; error?: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) => (
    <div className="relative group">
      <input 
        type={type} name={name} id={name} value={value}
        onChange={onChange}
        className={`
            peer w-full bg-neutral-100 dark:bg-neutral-900/50 border-b-2 border-t-0 border-x-0 border-neutral-300 dark:border-neutral-700 rounded-none px-4 py-3.5 text-foreground outline-none transition-all duration-300 placeholder-transparent
            ${error ? 'border-destructive' : 'focus:border-foreground hover:border-foreground/50'}
        `}
        placeholder={label}
      />
      <label 
        htmlFor={name}
        className={`
            absolute left-4 top-3.5 text-muted-foreground transition-all duration-300 pointer-events-none
            peer-focus:-top-2.5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-foreground font-medium
            peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs
            ${error ? 'text-destructive' : ''}
        `}
      >
        {label}
      </label>
      {/* High-tech focus corner indicator */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-foreground opacity-0 peer-focus:opacity-100 transition-opacity duration-300"></div>
      
      {error && <p className="text-destructive text-xs mt-1 ml-1">{error}</p>}
    </div>
);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Erforderlich.';
    if (!formData.email.trim()) { newErrors.email = 'Erforderlich.'; } 
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Ungültig.';}
    if (!formData.message.trim()) newErrors.message = 'Erforderlich.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || isSuccess) return;
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSubmitted(true);
          setIsSuccess(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 2000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center mb-4">
             <CinematicText 
               words={["KONTAKT"]} 
               className="text-4xl md:text-5xl font-extrabold"
               alignment="center"
             />
          </div>
          <p className="text-lg text-muted-foreground">Wir sind für Sie da. Jederzeit.</p>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`
            max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0
            bg-white dark:bg-neutral-900/30 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl
            border border-neutral-200 dark:border-neutral-800
        `}>
          {/* Info Side */}
          <div className="p-10 md:p-14 flex flex-col justify-between bg-neutral-50 dark:bg-black/40 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Kontaktinformationen</h3>
                <div className="space-y-8">
                <a href="tel:+49123456789" className="flex items-center group">
                    <div className="w-12 h-12 rounded-lg bg-background border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mr-5 group-hover:border-foreground transition-colors shadow-sm">
                        <PhoneIcon className="w-5 h-5 text-foreground"/>
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Telefon</p>
                        <span className="text-foreground group-hover:text-foreground/80 transition-colors font-medium">+49 (0) 123 456 789</span>
                    </div>
                </a>
                <a href="mailto:kontakt@ass-security.de" className="flex items-center group">
                    <div className="w-12 h-12 rounded-lg bg-background border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mr-5 group-hover:border-foreground transition-colors shadow-sm">
                        <MailIcon className="w-5 h-5 text-foreground"/>
                    </div>
                    <div>
                         <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">E-Mail</p>
                        <span className="text-foreground group-hover:text-foreground/80 transition-colors font-medium">kontakt@ass-security.de</span>
                    </div>
                </a>
                <a href="#" className="flex items-center group">
                    <div className="w-12 h-12 rounded-lg bg-background border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mr-5 group-hover:border-foreground transition-colors shadow-sm">
                        <LocationIcon className="w-5 h-5 text-foreground"/>
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Hauptsitz</p>
                        <span className="text-foreground group-hover:text-foreground/80 transition-colors font-medium">Königstraße 26, Dresden</span>
                    </div>
                </a>
                </div>
            </div>
            
            <div className="mt-12 relative z-10">
                <div className="h-48 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800/50 overflow-hidden relative border border-neutral-200 dark:border-neutral-700 shadow-inner">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.653456488734!2d13.7383!3d51.0603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf1a14000001%3A0x0!2zS8O2bmlnc3RyYcOfZSAyNiwgMDEwOTcgRHJlc2Rlbg!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, opacity: 0.8, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }} 
                        allowFullScreen 
                        loading="lazy"
                        className="dark:invert dark:grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-14 relative bg-background/50">
            {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 border border-green-500/20">
                        <CheckIcon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Nachricht gesendet</h3>
                    <p className="text-muted-foreground">Vielen Dank für Ihre Anfrage. Wir melden uns umgehend bei Ihnen.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Senden Sie uns eine Nachricht</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField name="name" label="Name" value={formData.name} error={errors.name} onChange={handleChange} />
                        <InputField name="email" type="email" label="E-Mail" value={formData.email} error={errors.email} onChange={handleChange} />
                    </div>
                    <InputField name="phone" type="tel" label="Telefon (optional)" value={formData.phone} error={errors.phone} onChange={handleChange} />
                    
                    <div className="relative group">
                        <textarea 
                            name="message" id="message" rows={4} value={formData.message} onChange={handleChange}
                            className={`
                                peer w-full bg-neutral-100 dark:bg-neutral-900/50 border-b-2 border-t-0 border-x-0 border-neutral-300 dark:border-neutral-700 rounded-none px-4 py-3.5 text-foreground outline-none transition-all duration-300 placeholder-transparent resize-none
                                ${errors.message ? 'border-destructive' : 'focus:border-foreground hover:border-foreground/50'}
                            `}
                            placeholder="Ihre Nachricht"
                        ></textarea>
                        <label htmlFor="message" className={`
                            absolute left-4 top-3.5 text-muted-foreground transition-all duration-300 pointer-events-none
                            peer-focus:-top-2.5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-foreground font-medium
                            peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs
                            ${errors.message ? 'text-destructive' : ''}
                        `}>Ihre Nachricht</label>
                        {/* High-tech focus corner */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-foreground opacity-0 peer-focus:opacity-100 transition-opacity duration-300"></div>

                        {errors.message && <p className="text-destructive text-xs mt-1 ml-1">{errors.message}</p>}
                    </div>

                    <button 
                        type="submit" 
                        disabled={isLoading || isSuccess}
                        className={`
                            w-full py-4 text-background font-bold uppercase tracking-widest rounded-lg mt-4
                            transition-all duration-300 transform shadow-lg
                            flex items-center justify-center overflow-hidden relative group
                            ${isSuccess ? 'bg-green-600' : 'bg-foreground hover:bg-foreground/90 hover:scale-[1.01] hover:shadow-xl'} 
                            ${(isLoading || isSuccess) && 'cursor-not-allowed'}
                        `}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                             {isLoading ? <SpinnerIcon /> : isSuccess ? <CheckIcon className="w-6 h-6" /> : 'Nachricht senden'}
                        </span>
                        {/* Shine effect on button */}
                        {!isLoading && !isSuccess && (
                            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-shine" style={{ animationDuration: '1s' }}></div>
                        )}
                    </button>
                </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;