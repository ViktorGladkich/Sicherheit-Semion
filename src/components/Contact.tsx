import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MailIcon, PhoneIcon, CheckCircleIcon, SpinnerIcon, CheckIcon } from './Icons';

interface FormState { name: string; email: string; phone: string; message: string; }
interface FormErrors { name?: string; email?: string; phone?: string; message?: string; }

// Вынесенный компонент для полей ввода
const InputField = ({ name, type = 'text', label, value, error, onChange }: { name: keyof FormState; type?: string; label: string; value: string; error?: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) => (
    <div className="relative">
      <input 
        type={type} name={name} id={name} value={value}
        onChange={onChange}
        className={`peer w-full bg-white dark:bg-slate-800 border rounded-md py-3 px-4 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 placeholder-transparent ${error ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'}`}
        placeholder={label}
      />
      <label 
        htmlFor={name}
        className={`absolute left-4 -top-2.5 bg-gray-50 dark:bg-slate-950 px-1 text-sm transition-all duration-300 pointer-events-none
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400
        peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400
        ${error ? 'text-red-500 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'} ${value ? '-top-2.5 text-sm' : ''}`}
      >
        {label}
      </label>
      {error && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{error}</p>}
    </div>
);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  const [formData, setFormData] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich.';
    if (!formData.email.trim()) { newErrors.email = 'E-Mail ist erforderlich.'; } 
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';}
    if (!formData.phone.trim()) { newErrors.phone = 'Telefonnummer ist erforderlich.'; }
    else if (!/^\+?[0-9\s-()]{7,}$/.test(formData.phone)) { newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein.';}
    if (!formData.message.trim()) newErrors.message = 'Nachricht ist erforderlich.';
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
    <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden" ref={sectionRef}>
       <style>{`
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Kontaktieren Sie uns</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Haben Sie Fragen oder benötigen Sie ein individuelles Angebot? Wir sind für Sie da.</p>
        </div>
        <div className={`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 dark:bg-slate-950 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-slate-800 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Direkter Kontakt</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Rufen Sie uns an oder schreiben Sie eine E-Mail. Unser Team meldet sich schnellstmöglich bei Ihnen.</p>
            <div className="space-y-4">
              <a href="tel:+49123456789" className="flex items-center group">
                <PhoneIcon className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform"/>
                <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">+49 (0) 123 456 789</span>
              </a>
              <a href="mailto:kontakt@aegis-sicherheit.de" className="flex items-center group">
                <MailIcon className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform"/>
                <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">kontakt@aegis-sicherheit.de</span>
              </a>
              <div className="flex items-start group cursor-default">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.418 0 8-3.582 8-8S12 3 12 3 4 9.582 4 13s3.582 8 8 8z" />
      <circle cx="12" cy="13" r="3" />
    </svg>

    <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
      Musterstraße 12<br />
      01067 Dresden, Deutschland
    </span>
  </div>
            </div>
          </div>
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-slate-800/50 p-8 rounded-md animate-scale-in">
              <CheckCircleIcon className="w-12 h-12 text-green-500 dark:text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Vielen Dank!</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-8">
                <InputField name="name" label="Ihr Name" value={formData.name} error={errors.name} onChange={handleChange} />
                <InputField name="email" type="email" label="Ihre E-Mail-Adresse" value={formData.email} error={errors.email} onChange={handleChange} />
                <InputField name="phone" type="tel" label="Ihre Telefonnummer" value={formData.phone} error={errors.phone} onChange={handleChange} />
                <div className="relative">
                  <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange}
                    className={`peer w-full bg-white dark:bg-slate-800 border rounded-md py-3 px-4 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 placeholder-transparent ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'}`}
                    placeholder="Ihre Nachricht"
                  ></textarea>
                   <label htmlFor="message" className={`absolute left-4 -top-2.5 bg-gray-50 dark:bg-slate-950 px-1 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400 ${errors.message ? 'text-red-500 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'} ${formData.message ? '-top-2.5 text-sm' : ''}`}>Ihre Nachricht</label>
                  {errors.message && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                <div>
                  <button type="submit" disabled={isLoading || isSuccess}
                    className={`w-full py-3 px-6 text-white font-semibold rounded-md transition-all duration-300 shadow-lg flex items-center justify-center h-12 ${isSuccess ? 'bg-green-500 shadow-green-500/20' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'} ${(isLoading || isSuccess) && 'cursor-not-allowed'}`}>
                    {isLoading && <SpinnerIcon />}
                    {isSuccess && <CheckIcon className="w-6 h-6" />}
                    {!isLoading && !isSuccess && 'Anfrage senden'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;