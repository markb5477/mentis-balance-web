import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/mentis-balance-logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLocalizedPath = (key: string) => {
    const paths = {
      home: { da: '/', en: '/', es: '/', pt: '/' },
      profile: { da: '/profil', en: '/profile', es: '/perfil', pt: '/perfil' },
      treatment: { da: '/behandling', en: '/treatment', es: '/tratamiento', pt: '/tratamento' },
      prices: { da: '/priser', en: '/prices', es: '/precios', pt: '/precos' },
      practical: { da: '/praktisk', en: '/practical', es: '/practico', pt: '/pratico' },
      contact: { da: '/kontakt', en: '/contact', es: '/contacto', pt: '/contato' },
    };
    return paths[key as keyof typeof paths][i18n.language as keyof typeof paths.home] || paths[key as keyof typeof paths].da;
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const navItems = [
    { key: 'home', label: t('navigation.home'), path: getLocalizedPath('home') },
    { key: 'profile', label: t('navigation.profile'), path: getLocalizedPath('profile') },
    { key: 'treatment', label: t('navigation.treatment'), path: getLocalizedPath('treatment') },
    { key: 'prices', label: t('navigation.prices'), path: getLocalizedPath('prices') },
    { key: 'practical', label: t('navigation.practical'), path: getLocalizedPath('practical') },
    { key: 'contact', label: t('navigation.contact'), path: getLocalizedPath('contact') },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Mentis Balance Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher - Desktop */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;