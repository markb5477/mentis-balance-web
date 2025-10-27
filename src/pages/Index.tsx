import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-bay-view.jpg';
import dpLogo from '@/assets/dansk-psykolog-forening-logo.svg';

const Index = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedPath = (key: string) => {
    const paths = {
      treatment: { da: '/behandling', en: '/treatment', es: '/tratamiento', pt: '/tratamento' },
      contact: { da: '/kontakt', en: '/contact', es: '/contacto', pt: '/contato' },
    };
    return paths[key as keyof typeof paths][i18n.language as keyof typeof paths.treatment] || paths[key as keyof typeof paths].da;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t('home.subtitle')}
          </p>
          <div className="space-y-6">
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              {t('home.introduction')}
            </p>
            <p className="text-lg font-medium">
              {t('home.highlight')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild variant="default" size="lg" className="bg-accent hover:bg-accent/90">
                <Link to={getLocalizedPath('treatment')}>
                  {t('home.cta_treatment')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
                <Link to={getLocalizedPath('contact')}>
                  {t('home.cta_booking')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-warm-neutral">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light italic text-primary mb-6">
              "{t('home.quote')}"
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.quote_text')}
            </p>
          </blockquote>
          {/* Dansk Psykolog Forening Logo */}
          
          <div className="mt-12 flex flex-col items-center">
            <p className="text-2xl md:text-3xl font-light text-primary mb-2">
              {t('member_of')}
            </p>
            <img 
              src={dpLogo} 
              alt="Dansk Psykolog Forening" 
              className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
