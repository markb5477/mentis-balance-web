import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedPath = (key: string) => {
    const paths = {
      home: { da: '/', en: '/', es: '/', pt: '/' },
      profile: { da: '/profil', en: '/profile', es: '/perfil', pt: '/perfil' },
      treatment: { da: '/behandling', en: '/treatment', es: '/tratamiento', pt: '/tratamento' },
      prices: { da: '/priser', en: '/prices', es: '/precios', pt: '/precos' },
      practical: { da: '/praktisk', en: '/practical', es: '/practico', pt: '/pratico' },
      contact: { da: '/kontakt', en: '/contact', es: '/contacto', pt: '/contato' },
      privacy: { da: '/privatlivspolitik', en: '/privacy', es: '/privacy', pt: '/privacy' },
      terms: { da: '/vilkar', en: '/terms', es: '/terms', pt: '/terms' },
    };
    return paths[key as keyof typeof paths][i18n.language as keyof typeof paths.home] || paths[key as keyof typeof paths].da;
  };

  return (
    <footer className="bg-warm-neutral border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+4521636222" className="hover:text-accent transition-colors">
                  21 63 62 22
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@mentisbalance.dk" className="hover:text-accent transition-colors">
                  info@mentisbalance.dk
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <div className="text-sm">
                  <div>{t('contact.address_line_1')}</div>
                  <div>{t('contact.address_line_2')}</div>
                  <div>{t('contact.address_line_3')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to={getLocalizedPath('home')} className="hover:text-accent transition-colors">
                {t('navigation.home')}
              </Link>
              <Link to={getLocalizedPath('profile')} className="hover:text-accent transition-colors">
                {t('navigation.profile')}
              </Link>
              <Link to={getLocalizedPath('treatment')} className="hover:text-accent transition-colors">
                {t('navigation.treatment')}
              </Link>
              <Link to={getLocalizedPath('prices')} className="hover:text-accent transition-colors">
                {t('navigation.prices')}
              </Link>
              <Link to={getLocalizedPath('practical')} className="hover:text-accent transition-colors">
                {t('navigation.practical')}
              </Link>
              <Link to={getLocalizedPath('contact')} className="hover:text-accent transition-colors">
                {t('navigation.contact')}
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link to={getLocalizedPath('privacy')} className="hover:text-accent transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to={getLocalizedPath('terms')} className="hover:text-accent transition-colors">
                {t('footer.terms')}
              </Link>
            </nav>
          </div>

          {/* Language Switcher */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Language</h3>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;