import React from 'react';
import { SOCIALS } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Sumesh Singh Kotiwale</h3>
          <div className="flex items-center justify-center md:justify-start gap-2 text-white/50">
            <MapPin className="w-4 h-4" />
            <span>{SOCIALS.location}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            {SOCIALS.email}
          </a>
          <a href={`tel:${SOCIALS.phone}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
            {SOCIALS.phone}
          </a>
        </div>
      </div>
      <div className="text-center mt-12 text-sm text-white/20">
        © {new Date().getFullYear()} Sumesh Singh Kotiwale. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;