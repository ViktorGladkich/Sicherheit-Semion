import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpinnerIcon, CheckIcon } from "../Icons";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const InputField = ({
  name,
  type = "text",
  label,
  value,
  error,
  onChange,
}: {
  name: keyof FormState;
  type?: string;
  label: string;
  value: string;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => (
  <div className="relative group w-full">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={`
            peer w-full bg-neutral-100 dark:bg-neutral-900/50 border-b-2 border-t-0 border-x-0 border-neutral-300 dark:border-neutral-700 rounded-none px-4 py-3.5 text-foreground outline-none transition-all duration-300 placeholder-transparent
            ${
              error
                ? "border-destructive"
                : "focus:border-foreground hover:border-foreground/50"
            }
        `}
      placeholder={label}
    />
    <label
      htmlFor={name}
      className={`
            absolute left-4 top-3.5 text-muted-foreground transition-all duration-300 pointer-events-none
            peer-focus:-top-2.5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-foreground font-medium
            peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs
            ${error ? "text-destructive" : ""}
        `}
    >
      {label}
    </label>
    {/* High-tech focus corner indicator */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-foreground opacity-0 peer-focus:opacity-100 transition-opacity duration-300"></div>

    {error && <p className="text-destructive text-xs mt-1 ml-1">{error}</p>}
  </div>
);

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Erforderlich.";
    if (!formData.lastName.trim()) newErrors.lastName = "Erforderlich.";
    if (!formData.email.trim()) {
      newErrors.email = "Erforderlich.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ungültig.";
    }

    // Phone validation (Optional but must be valid if entered)
    if (formData.phone.trim()) {
      // Allows +, spaces, dots, dashes, and at least 6 characters
      const phoneRegex = /^[+]?[\d\s./-]{6,}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = "Ungültige Nummer.";
      }
    }

    if (!formData.message.trim()) newErrors.message = "Erforderlich.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || isSuccess) return;
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);

      try {
        // Web3Forms API endpoint
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with actual key from web3forms.com
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone || "Nicht angegeben",
            message: formData.message,
            subject: `Neue Kontaktanfrage von ${formData.firstName} ${formData.lastName}`,
          }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSubmitted(true);
            setIsSuccess(false);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            });
          }, 2000);
        } else {
          // Show error message
          setErrors({
            message:
              result.message ||
              "Fehler beim Senden. Bitte versuchen Sie es später erneut.",
          });
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setErrors({
          message: "Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 border border-green-500/20">
          <CheckIcon className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Nachricht gesendet
        </h3>
        <p className="text-muted-foreground">
          Vielen Dank für Ihre Anfrage. Wir melden uns umgehend bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 h-full flex flex-col justify-center"
    >
      <h3 className="text-2xl font-bold text-foreground mb-4">
        Senden Sie uns eine Nachricht
      </h3>

      {/* Name Fields Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="firstName"
          label="Vorname"
          value={formData.firstName}
          error={errors.firstName}
          onChange={handleChange}
        />
        <InputField
          name="lastName"
          label="Nachname"
          value={formData.lastName}
          error={errors.lastName}
          onChange={handleChange}
        />
      </div>

      {/* Contact Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="email"
          type="email"
          label="E-Mail"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
        />
        <InputField
          name="phone"
          type="tel"
          label="Telefon (optional)"
          value={formData.phone}
          error={errors.phone}
          onChange={handleChange}
        />
      </div>

      <div className="relative group">
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`
                        peer w-full bg-neutral-100 dark:bg-neutral-900/50 border-b-2 border-t-0 border-x-0 border-neutral-300 dark:border-neutral-700 rounded-none px-4 py-3.5 text-foreground outline-none transition-all duration-300 placeholder-transparent resize-none
                        ${
                          errors.message
                            ? "border-destructive"
                            : "focus:border-foreground hover:border-foreground/50"
                        }
                    `}
          placeholder="Ihre Nachricht"
        ></textarea>
        <label
          htmlFor="message"
          className={`
                    absolute left-4 top-3.5 text-muted-foreground transition-all duration-300 pointer-events-none
                    peer-focus:-top-2.5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-foreground font-medium
                    peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs
                    ${errors.message ? "text-destructive" : ""}
                `}
        >
          Ihre Nachricht
        </label>
        {/* High-tech focus corner */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-foreground opacity-0 peer-focus:opacity-100 transition-opacity duration-300"></div>

        {errors.message && (
          <p className="text-destructive text-xs mt-1 ml-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading || isSuccess}
        className={`
                    w-full py-4 cursor-pointer text-background font-bold uppercase tracking-widest rounded-lg mt-4
                    transition-all duration-300 transform shadow-lg
                    flex items-center justify-center overflow-hidden relative group
                    ${
                      isSuccess
                        ? "bg-green-600"
                        : "bg-foreground hover:bg-foreground/90 hover:scale-[1.01] hover:shadow-xl"
                    } 
                    ${(isLoading || isSuccess) && "cursor-not-allowed"}
                `}
      >
        <span className="relative z-10 flex items-center gap-2 h-6">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <SpinnerIcon />
              </motion.div>
            ) : isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-2"
              >
                <CheckIcon className="w-6 h-6" />
                <span>Gesendet</span>
              </motion.div>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                Nachricht senden
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        {/* Shine effect on button */}
        {!isLoading && !isSuccess && (
          <div
            className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-shine"
            style={{ animationDuration: "1s" }}
          ></div>
        )}
      </button>
    </form>
  );
};
