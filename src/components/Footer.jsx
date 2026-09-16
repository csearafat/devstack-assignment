import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Block */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg brand-bg-gradient flex items-center justify-center text-white font-bold text-sm">
              D
            </span>
            <span className="text-lg font-bold text-white">DevStack</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            A minimalist utility designed to empower developers to curate and organize their custom modern technology stacks.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#technologies" className="hover:text-white transition-colors">Technologies</a></li>
            <li><a href="#my-stack" className="hover:text-white transition-colors">Stack Builder</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2026 DevStack Builder. Built with React & Tailwind CSS.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-300">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-300">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;