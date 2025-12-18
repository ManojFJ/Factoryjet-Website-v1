import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Rocket, ChevronDown, Monitor, ShoppingBag, BookOpen, FileText } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';

interface HeaderProps {
  variant?: 'transparent' | 'solid';
}

const Header: React.FC<HeaderProps> = ({ variant = 'transparent' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const { openModal } = useContactModal();

  // For solid variant, always show scrolled style
  const showSolidStyle = variant === 'solid' || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Services',
      href: '#services',
      hasDropdown: true,
      submenu: [
        { label: 'Web Design', href: '/web-design', icon: Monitor, desc: 'Custom high-performance websites', isRoute: true },
        { label: 'E-Commerce', href: '/ecommerce', icon: ShoppingBag, desc: 'Shopify & WooCommerce stores', isRoute: true },
      ]
    },
    { label: 'About Us', href: '/about', hasDropdown: false, isRoute: true },
    { label: 'Pricing', href: '/pricing', hasDropdown: false, isRoute: true },
    {
      label: 'Resources',
      href: '#',
      hasDropdown: true,
      submenu: [
        { label: 'Blogs', href: '/blog', icon: FileText, desc: 'Latest insights & trends', isRoute: true },
        { label: 'Case Studies', href: '/case', icon: BookOpen, desc: 'Real client success stories', isRoute: true },
      ]
    },
    { label: 'Contact Us', href: '#cta', hasDropdown: false }
  ];

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubmenu(mobileSubmenu === label ? null : label);
  };

  const renderLink = (href: string, isRoute: boolean | undefined, children: React.ReactNode, className: string, onClick?: () => void) => {
    if (isRoute) {
      return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
    }
    return <a href={href} className={className} onClick={onClick}>{children}</a>;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${showSolidStyle ? 'pt-4' : 'pt-6'}`}>

      {/* Island Container */}
      <div
        className={`
          relative transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          flex items-center justify-between
          ${showSolidStyle
            ? 'w-[90%] md:w-[85%] max-w-6xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5 rounded-full py-3 px-4 md:px-6'
            : 'w-[95%] max-w-7xl bg-transparent py-2 px-4 md:px-0'
          }
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className={`w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center transition-colors ${showSolidStyle ? 'bg-jet-blue text-white' : 'bg-white text-jet-blue shadow-md'}`}>
            <Rocket size={18} className="md:w-5 md:h-5" fill="currentColor" />
          </div>
          <span className={`text-lg md:text-2xl font-display font-bold tracking-tight transition-colors ${showSolidStyle ? 'text-jet-navy' : 'text-white'}`}>
            FactoryJet
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group px-3 py-2">
              {renderLink(
                item.href,
                item.isRoute,
                <>
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300 inline ml-1" />}
                </>,
                `flex items-center gap-1 text-sm font-medium transition-colors ${
                  showSolidStyle ? 'text-gray-600 hover:text-jet-blue' : 'text-gray-200 hover:text-white'
                }`
              )}

              {/* Desktop Dropdown */}
              {item.hasDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl p-3 w-64 overflow-hidden">
                    {item.submenu?.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/50 transition-colors group/item"
                      >
                        <div className="bg-blue-100/50 text-jet-blue p-2 rounded-lg group-hover/item:bg-jet-blue group-hover/item:text-white transition-colors">
                          <sub.icon size={18} />
                        </div>
                        <div>
                          <div className="text-jet-navy font-bold text-sm">{sub.label}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{sub.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
           <button
             onClick={openModal}
             className={`
             px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0
             ${showSolidStyle
                ? 'bg-jet-navy text-white hover:bg-jet-blue'
                : 'bg-white text-jet-navy hover:bg-gray-100'
             }
           `}>
             Get Started
           </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${showSolidStyle ? 'text-jet-navy hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-4 lg:hidden flex flex-col gap-2 animate-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleMobileSubmenu(item.label)}
                    className="w-full flex items-center justify-between text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileSubmenu === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileSubmenu === item.label && (
                    <div className="bg-gray-50 rounded-xl p-2 mb-2 ml-4">
                      {item.submenu?.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-all text-jet-slate hover:text-jet-blue"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <sub.icon size={16} />
                          <span className="font-medium text-sm">{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                item.isRoute ? (
                  <Link
                    to={item.href}
                    className="block text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="w-full bg-jet-blue text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/30"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
