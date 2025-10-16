import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import TranslatedText from '@/components/TranslatedText';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('footer.terms')}
            </h1>

            <div className="space-y-8">
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('terms.treatment_terms_title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    {t('terms.treatment_terms_intro')}
                  </p>
                  
                  <h3 className="font-semibold mt-6 mb-3">{t('terms.booking_title')}</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('terms.booking_items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <h3 className="font-semibold mt-6 mb-3">{t('terms.cancellation_title')}</h3>
                  <p>{t('practical.cancellation_text')}</p>
                  
                  <h3 className="font-semibold mt-6 mb-3">{t('terms.payment_title')}</h3>
                  <p>{t('practical.payment_method_text')}</p>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('terms.insurance_title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{t('practical.payment_text_1')}</p>
                  <p><TranslatedText text={t('practical.payment_text_2')} /></p>
                  <p><TranslatedText text={t('practical.payment_text_3')} /></p>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('terms.quality_title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('terms.quality_items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('terms.complaints_title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    {t('terms.complaints_text')} 
                    <a href="https://www.psykolognaevnet.dk" className="text-accent hover:underline">psykolognaevnet.dk</a>
                  </p>
                  
                  <p className="mt-4">
                    {t('terms.complaints_contact')} 
                    <a href="tel:+4521636222" className="text-accent hover:underline ml-1">21 63 62 22</a> eller 
                    <a href="mailto:tania@mentisbalance.dk" className="text-accent hover:underline ml-1">tania@mentisbalance.dk</a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;