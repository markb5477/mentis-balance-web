import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('booking.title')}
            </h1>

            <div className="space-y-8 fade-in">
              <div className="text-center mb-8">
                <p className="text-lg mb-6">{t('booking.intro')}</p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a 
                    href="https://system.easypractice.net/book/mentis-balance#choose-service" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t('booking.cta')}
                  </a>
                </Button>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="w-full" style={{ minHeight: '800px' }}>
                    <iframe
                      src="https://system.easypractice.net/book/mentis-balance#choose-service"
                      width="100%"
                      height="800"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title={t('booking.iframe_title')}
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;

