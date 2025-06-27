'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Settings, User, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Serviços', href: '/servicos', icon: Settings },
    { name: 'Sobre', href: '/sobre', icon: User },
    { name: 'Contato', href: '/contato', icon: Phone },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-[#7B61FF] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">LC</span>
            </div>
            <span className="text-2xl font-bold text-[#1E1E1E] group-hover:text-[#7B61FF] transition-colors duration-300">
              LCArq
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-[#7B61FF] ${
                  isActive(item.href) ? 'text-[#7B61FF]' : 'text-[#1E1E1E]'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7B61FF] rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contato" className="btn-primary">
              Solicite um Orçamento
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg animate-fade-in">
            <div className="container-custom py-6">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.href) 
                          ? 'bg-[#7B61FF]/10 text-[#7B61FF]' 
                          : 'text-[#1E1E1E] hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
                <div className="pt-4 border-t">
                  <Link
                    href="/contato"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-full text-center block"
                  >
                    Solicite um Orçamento
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;