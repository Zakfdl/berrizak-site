import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Linkedin, Send, MapPin, FileText, Download, Share2, Twitter, Facebook, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef(null);

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+966570674043',
      href: 'tel:+966570674043',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'zakfdl22@gmail.com',
      href: 'mailto:zakfdl22@gmail.com',
      color: 'from-blue-500 to-[#1E3A8A]'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/zakaria-fadl-56b3b4384/',
      color: 'from-[#0077B5] to-[#1E3A8A]'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setIsShareOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xlgwyjar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed");

      toast({
        title: "✅ Thank You!",
        description: "Message Sent Successfully!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "❌ Error",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://berrizak.com');
    setCopied(true);
    toast({
      title: "Link Copied!",
      description: "Portfolio link copied to clipboard.",
    });
    setTimeout(() => {
      setCopied(false);
      setIsShareOpen(false);
    }, 2000);
  };

  const shareLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/sharing/share-offsite/?url=https://berrizak.com',
      color: 'text-[#0077B5] hover:bg-[#0077B5]/10'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/intent/tweet?url=https://berrizak.com&text=Check%20out%20my%20portfolio',
      color: 'text-[#1DA1F2] hover:bg-[#1DA1F2]/10'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/sharer/sharer.php?u=https://berrizak.com',
      color: 'text-[#4267B2] hover:bg-[#4267B2]/10'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1E3A8A 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#1E3A8A]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#1E3A8A] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Let's discuss how we can work together to drive your e-commerce success
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target={info.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="group block bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-[#1E3A8A] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${info.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      <p className="text-lg font-semibold text-white group-hover:text-[#1E3A8A] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 shadow-lg">
                  <MapPin className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-lg font-semibold text-white">
                    Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[#1E3A8A] transition-colors text-white placeholder-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[#1E3A8A] transition-colors text-white placeholder-gray-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[#1E3A8A] transition-colors resize-none text-white placeholder-gray-500"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#1E3A8A] text-white rounded-lg font-semibold hover:bg-[#2D4BA8] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
          <a
            href="https://drive.google.com/file/d/1KSwqHGLTlvGDTYuMIs1lLS-IixixlEKF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-lg font-semibold hover:bg-[#2D4BA8] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <FileText size={20} />
            View Resume
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1KSwqHGLTlvGDTYuMIs1lLS-IixixlEKF"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-lg font-semibold hover:bg-[#2D4BA8] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Download size={20} />
            Download Resume
          </a>

          <div className="relative w-full md:w-auto" ref={shareRef}>
            <button
              onClick={() => setIsShareOpen(!isShareOpen)}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-lg font-semibold hover:bg-[#2D4BA8] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Share2 size={20} />
              Share Portfolio
            </button>

            {/* Share Dropdown */}
            <div className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 bg-gray-900 rounded-xl p-3 shadow-2xl border border-gray-700 flex gap-2 min-w-max z-50 transition-all duration-300 origin-bottom ${isShareOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 border-b border-r border-gray-700 transform rotate-45"></div>

              {shareLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-colors duration-200 ${link.color}`}
                    title={`Share on ${Icon.name}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}

              <button
                onClick={handleCopyLink}
                className="p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                title="Copy Link"
              >
                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;