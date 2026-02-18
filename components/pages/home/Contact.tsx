"use client";
import Image from "next/image";
import { useState } from "react";

const FORM_TITLE = "Let's get in Touch";
const SUCCESS_MESSAGE = "✓ Message sent successfully! We'll be in touch soon.";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const OFFICES = [
  {
    title: "DUBAI OFFICE",
    phone: "+971 58 548 7150",
    email: "info@amarainteriordesign.com",
  },
  {
    title: "MIAMI OFFICE",
    phone: "+1 (305) 560 4373",
    email: "info@amarainteriordesign.com",
  },
];

export default function Contact() {
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
    <section id="contact" className="relative w-full">
      <div className="relative z-[2] h-[100vh] w-full max-md:h-auto max-md:min-h-[100vh]">
        <Image
          src="/images/pages/home/footer.png"
          width={1920}
          height={1080}
          alt="Beach landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex h-full items-center px-[20px] max-sm:px-[12px]">
          <div className="mx-auto flex max-w-[1200px] gap-[0px] rounded-[20px] bg-[#E8E0D6] max-md:flex-col">
            <div className="w-[33%] shrink-0 px-[5px] py-[10px] max-md:w-full max-md:px-[5px] max-md:py-[5px]">
              <Image
                src="/images/pages/landing/contact.png"
                width={400}
                height={600}
                alt="Interior design showcase"
                className="h-full w-full rounded-[16px] object-cover"
              />
            </div>

            <div className="flex w-[33%] flex-col justify-center px-[30px] py-[30px] max-md:w-full max-md:px-[24px] max-md:py-[24px] max-sm:px-[16px] max-sm:py-[20px]">
              {OFFICES.map((office, i) => (
                <div key={office.title} className={i > 0 ? "mt-[40px]" : ""}>
                  <h4 className="font-sans text-[14px] leading-[20px] font-bold tracking-[2px] text-[#262626] uppercase">
                    {office.title}
                  </h4>
                  <p className="mt-[12px] font-serif text-[16px] leading-[24px] font-normal text-[#262626]">
                    {office.phone}
                  </p>
                  <p className="mt-[8px] font-serif text-[16px] leading-[24px] font-normal text-[#262626]">
                    {office.email}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex w-[33%] flex-col justify-center px-[30px] py-[30px] max-md:w-full max-md:px-[24px] max-md:py-[24px] max-sm:px-[16px] max-sm:py-[16px]">
              <h3 className="mb-[24px] font-serif text-[22px] leading-[28px] font-normal tracking-[-0.8px] text-[#0a0a0a] max-sm:text-[18px]">
                {FORM_TITLE}
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border-b bg-transparent py-[12px] font-sans text-[14px] leading-[20px] font-normal text-[#0a0a0a] placeholder-[#666] transition-colors outline-none ${
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
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-b bg-transparent py-[12px] font-sans text-[14px] leading-[20px] font-normal text-[#0a0a0a] placeholder-[#666] transition-colors outline-none ${
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
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border-b bg-transparent py-[12px] font-sans text-[14px] leading-[20px] font-normal text-[#0a0a0a] placeholder-[#666] transition-colors outline-none ${
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
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full resize-none border-b bg-transparent py-[12px] font-sans text-[14px] leading-[20px] font-normal text-[#0a0a0a] placeholder-[#666] transition-colors outline-none ${
                      validationErrors.message ? "border-red-500" : "border-[#444]"
                    }`}
                  />
                  {validationErrors.message && (
                    <p className="mt-[4px] font-sans text-[11px] leading-[14px] font-normal text-red-600">
                      {validationErrors.message}
                    </p>
                  )}
                </div>

                <div className="mt-[16px]">
                  <button
                    type="submit"
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
                </div>

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

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
