import { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Loader2, User, Mail, Phone, Globe, Package, FileText, Sparkles } from 'lucide-react';

const serviceOptions = [
  'YouTube Video SEO',
  'YouTube Video Promotion',
  'Video Editing',
  'Instagram Reels Promotion',
  'Instagram Followers Growth',
  'Facebook Ads',
  'Google Ads',
  'Thumbnail Design',
];

const packageOptions = [
  'Test Project — $50',
  'Basic — $20',
  'Basic — $25',
  'Basic — $150',
  'Standard — $40',
  'Standard — $80',
  'Standard — $100',
  'Standard — $200',
  'Premium — $70',
  'Premium — $150',
  'Premium — $180',
  'Premium — $280',
  'Premium — $300',
  'Premium — $400',
  'Premium — $500',
];

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
  initialService?: string;
  initialPackage?: string;
}

export default function OrderModal({ open, onClose, initialService, initialPackage }: OrderModalProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '', email: '', whatsapp: '', country: '', service: '', pkg: '', details: '',
  });

  useEffect(() => {
    if (open) {
      setForm((f) => ({
        ...f,
        service: initialService || f.service,
        pkg: initialPackage || f.pkg,
      }));
      setStatus('idle');
    }
  }, [open, initialService, initialPackage]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const subject = encodeURIComponent(`New Order from ${form.name} — ${form.service}`);
    const body = encodeURIComponent(
      `New Order Details:\n\n` +
      `Full Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `Country: ${form.country}\n` +
      `Service: ${form.service}\n` +
      `Package: ${form.pkg}\n` +
      `Project Details: ${form.details}\n`
    );

    try {
      // Open email client to send to admin
      window.location.href = `mailto:admin@primeeit.com?subject=${subject}&body=${body}`;
      // Show success after short delay
      setTimeout(() => setStatus('success'), 1000);
    } catch {
      setStatus('error');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto modal-scroll shadow-2xl border-glow-anim">
        {/* Header */}
        <div className="sticky top-0 z-10 glass border-b border-[rgba(0,212,255,0.1)] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#00d4ff]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg">Place Your Order</h3>
              <p className="text-xs text-gray-500">Fill in your details below</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto rounded-full bg-[rgba(0,255,100,0.1)] border border-[rgba(0,255,100,0.3)] flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Order Received!</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                We have received your order successfully. A confirmation email and payment method will be sent to you shortly. Your order will be activated once payment is completed. Please check your email and wait for confirmation.
              </p>
              <button
                onClick={onClose}
                className="btn-neon mt-8 px-8 py-3 rounded-xl text-white font-semibold"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block font-medium">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 border border-[rgba(0,212,255,0.1)] focus:border-[rgba(0,212,255,0.5)] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 border border-[rgba(0,212,255,0.1)] focus:border-[rgba(0,212,255,0.5)] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* WhatsApp + Country */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium">WhatsApp Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full glass rounded-xl pl-10 pr-3 py-3 text-sm text-white placeholder-gray-600 border border-[rgba(0,212,255,0.1)] focus:border-[rgba(0,212,255,0.5)] focus:outline-none transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium">Country</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full glass rounded-xl pl-10 pr-3 py-3 text-sm text-white placeholder-gray-600 border border-[rgba(0,212,255,0.1)] focus:border-[rgba(0,212,255,0.5)] focus:outline-none transition-colors"
                      placeholder="United States"
                    />
                  </div>
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block font-medium">Select Service</label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white border border-[rgba(0,212,255,0.1)] focus:border-[rgba(0,212,255,0.5)] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0a0f1e]">Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-[#0a0f1e]">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Package */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block font-medium">Select Package</label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  <select
                    required
                    value={form.pkg}
                    onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                    className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white border border-[rgba(0,212,255,0.1)] focus:border-[rgba(0,212,255,0.5)] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0a0f1e]">Select a package...</option>
                    {packageOptions.map((p) => (
                      <option key={p} value={p} className="bg-[#0a0f1e]">{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Details */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block font-medium">Project Details</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <textarea
                    required
                    rows={3}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 border border-[rgba(0,212,255,0.1)] focus:border-[rgba(0,212,255,0.5)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project goals..."
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-neon w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Place Order
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">Something went wrong. Please try emailing admin@primeeit.com directly.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
