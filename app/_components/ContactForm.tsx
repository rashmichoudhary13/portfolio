"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/AnimatedChat/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/resend";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Please enter your name.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Please enter your email address.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Please write a message.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      sendEmail(formData);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-xl bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(20,184,166,0.02)]">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
            <p className="text-zinc-400 max-w-sm mb-8">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <Button
              onClick={() => setStatus("idle")}
              variant="outline"
              className="border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 px-6 py-2 rounded-xl transition-all duration-300"
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">Send a Message</h3>
              <p className="text-sm text-zinc-400">Have a project in mind or just want to say hello?</p>
            </div>

            {status === "error" && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-zinc-300 block">
                Your Name <span className="text-teal-400">*</span>
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                aria-invalid={!!errors.name}
                className={`w-full bg-zinc-900/30 border-zinc-800 text-white placeholder-zinc-500 focus-visible:ring-teal-500/20 focus-visible:border-teal-500/80 px-4 py-3 rounded-xl transition-all duration-300 h-11 ${errors.name ? "border-destructive/60 focus-visible:border-destructive" : ""
                  }`}
              />
              {errors.name && (
                <p className="text-xs text-destructive flex items-center gap-1.5 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-zinc-300 block">
                Email Address <span className="text-teal-400">*</span>
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                aria-invalid={!!errors.email}
                className={`w-full bg-zinc-900/30 border-zinc-800 text-white placeholder-zinc-500 focus-visible:ring-teal-500/20 focus-visible:border-teal-500/80 px-4 py-3 rounded-xl transition-all duration-300 h-11 ${errors.email ? "border-destructive/60 focus-visible:border-destructive" : ""
                  }`}
              />
              {errors.email && (
                <p className="text-xs text-destructive flex items-center gap-1.5 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-zinc-300 block">
                Message <span className="text-teal-400">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi, I'd like to talk about a potential project..."
                rows={5}
                aria-invalid={!!errors.message}
                className={`w-full bg-zinc-900/30 border-zinc-800 text-white placeholder-zinc-500 focus-visible:ring-teal-500/20 focus-visible:border-teal-500/80 px-4 py-3 rounded-xl transition-all duration-300 min-h-[120px] resize-none ${errors.message ? "border-destructive/60 focus-visible:border-destructive" : ""
                  }`}
              />
              {errors.message && (
                <p className="text-xs text-destructive flex items-center gap-1.5 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-6 rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:shadow-[0_0_25px_rgba(20,184,166,0.35)] transition-all duration-300 flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-75 disabled:pointer-events-none hover:scale-[1.01] active:scale-[0.99] border-none"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}