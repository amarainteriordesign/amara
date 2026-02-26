"use client";
import Image from "next/image";
import { useState } from "react";

const FORM_TITLE = "Let's get in touch";
const SUCCESS_MESSAGE = "✓ Message sent successfully! We'll be in touch soon.";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const OFFICES = [
  {
    title: "MIAMI OFFICE",
    phone: "+1 (305) 560 4373",
    email: "info@amarainteriordesign.com",
  },
  {
    title: "DUBAI OFFICE",
    phone: "+971 58 548 7150",
    email: "info@amarainteriordesign.com",
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: typeof validationErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

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

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvdoere";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
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

  return (
    <section id="contact-us" className="relative w-full bg-[#F1EBDF]">
      <div className="relative z-[2] w-full max-md:h-auto">
        <div className="px-[20px] pt-[60px] pb-[60px] max-sm:px-[12px] max-sm:pt-[20px] max-sm:pb-[30px]">
          <div className="mx-auto flex max-w-[1200px] gap-[0px] max-md:flex-col">
            <div className="w-[33%] shrink-0 px-[5px] py-[10px] max-md:order-3 max-md:w-full max-md:px-[5px] max-md:py-[5px]">
              <Image
                src="/images/pages/landing/Contact_Image_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
                width={400}
                height={600}
                alt="Luxury interior design consultation Amara Miami Dubai"
                className="h-full w-full rounded-[16px] object-cover"
              />
            </div>

            <div className="flex w-[33%] flex-col justify-between px-[30px] py-[30px] max-md:order-2 max-md:w-full max-md:px-[24px] max-md:py-[24px] max-sm:px-[16px] max-sm:py-[20px]">
              <div>
                {OFFICES.map((office, i) => (
                  <div key={office.title} className={i > 0 ? "mt-[40px]" : "mt-[3px]"}>
                    <h3 className="font-sans text-[14px] leading-[20px] font-normal tracking-[2px] text-[#262626] uppercase">
                      {office.title}
                    </h3>
                    <p className="mt-[12px] font-sans text-[14px] leading-[20px] font-normal text-[#666]">
                      {office.phone}
                    </p>
                    <p className="mt-[8px] font-sans text-[14px] leading-[20px] font-normal text-[#666]">
                      {office.email}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-[28px]">
                <a
                  href="https://api.whatsapp.com/send?phone=13055604373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[39px] items-center gap-[8px] rounded-[35px] border-[1px] border-[#26262699] px-[16px] font-sans text-[12px] font-medium tracking-[0.2px] text-[#262626] transition-all hover:bg-[#262626] hover:text-white max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[16px] w-[16px] max-sm:h-[14px] max-sm:w-[14px]"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  BOOK A DISCOVERY CALL
                </a>
              </div>
            </div>

            <div className="flex w-[33%] flex-col justify-between px-[30px] py-[30px] max-md:order-1 max-md:w-full max-md:px-[24px] max-md:py-[24px] max-sm:px-[16px] max-sm:py-[16px]">
              <div>
                <h2 className="mb-[24px] text-[22px] leading-[28px] font-normal tracking-[-0.8px] text-[#0a0a0a] max-sm:text-[18px]" style={{ fontFamily: 'var(--font-lora)' }}>
                  {FORM_TITLE}
                </h2>

                <form id="contact-form-landing" onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-[16px]">
                  <div>
                    <label htmlFor="landing-contact-name" className="sr-only">Name</label>
                    <input
                      id="landing-contact-name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="off"
                      suppressHydrationWarning
                      className={`w-full border-b bg-transparent py-[12px] font-sans text-[14px] leading-[20px] font-normal text-[#0a0a0a] placeholder-[#595959] transition-colors outline-none ${
                        validationErrors.name ? "border-red-500" : "border-[#444]"
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="mt-[4px] font-sans text-[11px] leading-[14px] font-normal text-red-600">
                        {validationErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="landing-contact-email" className="sr-only">Email</label>
                    <input
                      id="landing-contact-email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off"
                      suppressHydrationWarning
                      className={`w-full border-b bg-transparent py-[12px] font-sans text-[14px] leading-[20px] font-normal text-[#0a0a0a] placeholder-[#595959] transition-colors outline-none ${
                        validationErrors.email ? "border-red-500" : "border-[#444]"
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="mt-[4px] font-sans text-[11px] leading-[14px] font-normal text-red-600">
                        {validationErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="landing-contact-phone" className="sr-only">Phone number</label>
                    <input
                      id="landing-contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="off"
                      suppressHydrationWarning
                      className={`w-full border-b bg-transparent py-[12px] font-sans text-[14px] leading-[20px] font-normal text-[#0a0a0a] placeholder-[#595959] transition-colors outline-none ${
                        validationErrors.phone ? "border-red-500" : "border-[#444]"
                      }`}
                    />
                    {validationErrors.phone && (
                      <p className="mt-[4px] font-sans text-[11px] leading-[14px] font-normal text-red-600">
                        {validationErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="landing-contact-message" className="sr-only">Your message</label>
                    <textarea
                      id="landing-contact-message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      autoComplete="off"
                      suppressHydrationWarning
                      className={`w-full resize-none border-b bg-transparent py-[12px] font-sans text-[14px] leading-[20px] font-normal text-[#0a0a0a] placeholder-[#595959] transition-colors outline-none ${
                        validationErrors.message ? "border-red-500" : "border-[#444]"
                      }`}
                    />
                    {validationErrors.message && (
                      <p className="mt-[4px] font-sans text-[11px] leading-[14px] font-normal text-red-600">
                        {validationErrors.message}
                      </p>
                    )}
                  </div>
                </form>
              </div>

              <div className="mt-[16px]">
                <button
                  type="submit"
                  form="contact-form-landing"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-[6px] rounded-full bg-[#9B9284] px-[24px] py-[10px] font-sans text-[13px] leading-[18px] font-normal text-[#FFF] transition-all duration-300 hover:bg-[#8B8170] disabled:cursor-not-allowed disabled:opacity-50"
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

                {submitStatus === "success" && (
                  <p className="pt-[8px] font-sans text-[12px] leading-[16px] font-normal text-green-600">
                    {SUCCESS_MESSAGE}
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="pt-[8px] font-sans text-[12px] leading-[16px] font-normal text-red-600">
                    &cross; Error sending message. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-[#C8BFB3]" />
    </section>
  );
}
