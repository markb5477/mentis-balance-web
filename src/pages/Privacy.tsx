import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('footer.privacy')}
            </h1>

            <div className="space-y-8">
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('privacy.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Mentis Balance er forpligtet til at beskytte dine personoplysninger i overensstemmelse med 
                    databeskyttelsesforordningen (GDPR).
                  </p>
                  
                  <h3 className="font-semibold mt-6 mb-3">{t('privacy.data_collection_title')}</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('privacy.data_collection_items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <h3 className="font-semibold mt-6 mb-3">{t('privacy.data_purpose_title')}</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('privacy.data_purpose_items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <h3 className="font-semibold mt-6 mb-3">{t('privacy.data_storage_title')}</h3>
                  <p>
                    {t('privacy.data_storage_text')}
                  </p>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('privacy.confidentiality_title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">
                    {t('practical.confidentiality_text')}
                  </p>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('privacy.rights_title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{t('privacy.rights_intro')}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('privacy.rights_items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <p className="mt-6">
                    {t('privacy.rights_contact')} 
                    <a href="mailto:tania@mentisbalance.dk" className="text-accent hover:underline ml-1">
                      tania@mentisbalance.dk
                    </a>
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

export default Privacy;