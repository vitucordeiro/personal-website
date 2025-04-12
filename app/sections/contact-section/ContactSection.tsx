'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="">
      <div className="container py-20 mx-auto max-md:pl-2 max-md:pr-2 max-lg:pl-4 max-lg:pr-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to
              work together or just say hello!
            </p>

            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="h-5 w-5 text-primary" />}
                href="mailto:victorcordeiro.devops@gmail.com"
                text="victorcordeiro.devops@gmail.com"
              />
              <ContactItem
                icon={<Linkedin className="h-5 w-5 text-primary" />}
                href="https://linkedin.com/in/vitorcordeiru"
                text="linkedin.com/in/vitorcordeiru"
              />
              <ContactItem
                icon={<Github className="h-5 w-5 text-primary" />}
                href="https://github.com/vitucordeiro"
                text="github.com/vitucordeiro"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  id="name"
                  label="Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  required
                />
              </div>

              <FormField
                id="subject"
                label="Subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />

              <FormField
                id="message"
                label="Message"
                component="textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
                rows={5}
              />

              <button
                type="submit"
                className="p-2 rounded-md border-1  bg-white hover:bg-gray-100 transition-colors"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-500 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Contact Item Component
function ContactItem({ icon, href, text, style }: { icon: React.ReactNode, href: string, text: string, style?:string}) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500 transition-colors"
      >
        {text}
      </a>
    </div>
  );
}

// Reusable Form Field Component
function FormField({
  id,
  label,
  type = 'text',
  component = 'input',
  value,
  onChange,
  placeholder,
  required,
  rows,
}: {
  id: string;
  label: string;
  type?: string;
  component?: 'input' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}) {
  const commonProps = {
    id,
    value,
    onChange,
    placeholder,
    required,
    className: "flex w-full rounded-md border border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      {component === 'textarea' ? (
        <textarea {...commonProps} rows={rows} />
      ) : (
        <input type={type} {...commonProps} className={`h-10 ${commonProps.className}`} />
      )}
    </div>
  );
}
