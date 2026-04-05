"use client";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvdoere";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AboutLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Hello, I am interested in your interior design services.",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: typeof validationErrors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 8) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) {
      errors.message = "Your message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "Hello, I am interested in your interior design services." });
        setValidationErrors({});
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (field: keyof typeof validationErrors) =>
    `w-full border-b bg-transparent py-[8px] font-sans text-[16px] leading-[28px] font-normal tracking-[-0.2px] text-[#4a4a4a] placeholder-[#4a4a4a] transition-colors outline-none max-sm:text-[14px] max-sm:leading-[24px] ${
      validationErrors[field] ? "border-red-500" : "border-[#444]"
    }`;

  return (
    <section className="w-full bg-[#e8dfd2]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-[1fr_1fr] grid-rows-[auto_1fr_auto] gap-x-[60px] px-[60px] pt-[80px] pb-[60px] max-sm:grid-cols-1 max-sm:gap-y-0 max-sm:px-[20px] max-sm:pt-[40px] max-sm:pb-[30px]">

        <a href="#contact-us" className="col-start-1 row-start-1 pb-[24px] text-center text-[28px] leading-[36px] font-normal tracking-[-0.3px] text-[#262626] no-underline max-sm:pb-[16px] max-sm:text-[22px] max-sm:leading-[30px]" style={{ fontFamily: 'var(--font-lora)', color: 'inherit' }}>
          Your Luxury Interior Designers<br />in Miami
        </a>

        <a href="#contact-us" className="col-start-2 row-start-1 pb-[24px] text-[28px] leading-[36px] font-normal tracking-[-0.3px] text-[#262626] no-underline max-sm:col-start-1 max-sm:row-start-4 max-sm:mt-[32px] max-sm:pb-[16px] max-sm:text-[22px] max-sm:leading-[30px]" style={{ fontFamily: 'var(--font-lora)', color: 'inherit' }}>
          Let&apos;s get in touch
        </a>

        <div className="col-start-1 row-start-2 max-sm:row-start-2 max-sm:mt-[24px]">
          <p className="font-sans text-[16px] leading-[28px] font-normal tracking-[-0.2px] text-[#4a4a4a] text-justify max-sm:text-[14px] max-sm:leading-[24px]">
            We are a Miami-based luxury full-service interior design boutique firm specializing in high-end residential and commercial projects. From waterfront estates and penthouses to hospitality and investment properties, we provide tailored interior design solutions, including concept development, space planning, custom furniture design and procurement, and project coordination to deliver refined spaces from concept to completion.
          </p>
        </div>

        <div className="col-start-2 row-start-2 max-sm:col-start-1 max-sm:row-start-5 max-sm:mt-[16px]">
          <form id="about-landing-form" onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-0">
            <div>
              <label htmlFor="about-landing-name" className="sr-only">Name</label>
              <input
                id="about-landing-name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                style={{ paddingTop: 0 }}
                className={inputClasses("name")}
              />
              {validationErrors.name && (
                <p className="mt-[4px] font-sans text-[11px] leading-[14px] font-normal text-red-600">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="about-landing-email" className="sr-only">Email</label>
              <input
                id="about-landing-email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className={inputClasses("email")}
              />
              {validationErrors.email && (
                <p className="mt-[4px] font-sans text-[11px] leading-[14px] font-normal text-red-600">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="about-landing-phone" className="sr-only">Phone number</label>
              <input
                id="about-landing-phone"
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className={inputClasses("phone")}
              />
              {validationErrors.phone && (
                <p className="mt-[4px] font-sans text-[11px] leading-[14px] font-normal text-red-600">{validationErrors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="about-landing-message" className="sr-only">Your message</label>
              <textarea
                id="about-landing-message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                autoComplete="off"
                className={`w-full resize-none border-b bg-transparent py-[8px] font-sans text-[16px] leading-[28px] font-normal tracking-[-0.2px] text-[#4a4a4a] placeholder-[#4a4a4a] transition-colors outline-none max-sm:text-[14px] max-sm:leading-[24px] ${
                  validationErrors.message ? "border-red-500" : "border-[#444]"
                }`}
              />
              {validationErrors.message && (
                <p className="mt-[4px] font-sans text-[11px] leading-[14px] font-normal text-red-600">{validationErrors.message}</p>
              )}
            </div>

            {submitStatus === "success" && (
              <p className="font-sans text-[12px] leading-[16px] font-normal text-green-600">
                ✓ Message sent successfully! We&apos;ll be in touch soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="font-sans text-[12px] leading-[16px] font-normal text-red-600">
                ✗ Error sending message. Please try again.
              </p>
            )}
          </form>
        </div>

        <div className="col-start-1 row-start-3 pt-[40px] max-sm:row-start-3 max-sm:mt-[16px] max-sm:pt-0 max-sm:flex max-sm:justify-center">
          <a
            href="mailto:info@amarainteriordesign.com?subject=Interior%20Design%20Inquiry&body=Hello%20Amara%20Team%2C%0A%0AI%20am%20interested%20in%20your%20interior%20design%20services.%20Please%20contact%20me%20to%20discuss%20my%20project.%0A%0AThank%20you."
            className="inline-flex h-[39px] items-center gap-[8px] rounded-[35px] border-[1px] border-[#26262699] px-[16px] font-sans text-[12px] font-medium tracking-[0.2px] text-[#262626] transition-all hover:bg-[#262626] hover:text-white max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[16px] w-[16px] max-sm:h-[14px] max-sm:w-[14px]"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            WORK WITH US
          </a>
        </div>

        <div className="col-start-2 row-start-3 pt-[40px] max-sm:col-start-1 max-sm:row-start-6 max-sm:mt-[16px] max-sm:pt-0">
          <button
            type="submit"
            form="about-landing-form"
            disabled={isSubmitting}
            onClick={(e) => {
              const form = document.getElementById('about-landing-form') as HTMLFormElement;
              if (form) form.requestSubmit();
              e.preventDefault();
            }}
            className="flex items-center justify-center gap-[6px] rounded-full bg-[#9B9284] px-[24px] py-[12px] font-sans text-[14px] leading-[18px] font-normal text-[#FFF] transition-all duration-300 hover:bg-[#8B8170] disabled:cursor-not-allowed disabled:opacity-50 max-sm:text-[13px]"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <span>Send Your Inquiry</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#FFF]"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
