import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import TranslatedText from '@/components/TranslatedText';
import { PRICING, formatPrice } from '@/config/pricing';

const Practical = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('practical.title')}
            </h1>

            <div className="space-y-8">
              {/* Conditions */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>
                    {t('practical.conditions')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      {t('practical.condition_1')}
                    </li>
                    <li>
                      {t('practical.condition_2')}
                    </li>
                    <li>
                      {t('practical.condition_3')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Confidentiality */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>
                    {t('practical.confidentiality')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{t('practical.confidentiality_text')}</p>
                </CardContent>
              </Card>

              {/* Cancellation Rules */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>
                    {t('practical.cancellation')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{t('practical.cancellation_text', { cancellationFee: formatPrice(PRICING.CANCELLATION_FEE) })}</p>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>
                    {t('practical.payment')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">{t('practical.payment_title')}</h4>
                      <div className="space-y-4">
                        <p><TranslatedText text={t('practical.payment_text_1')} /></p>
                        <p><TranslatedText text={t('practical.payment_text_2')} /></p>
                        <p><TranslatedText text={t('practical.payment_text_3')} /></p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-3">{t('practical.payment_method')}</h4>
                      <p className="mb-4">{t('practical.payment_method_text')}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold mb-2">{t('practical.payment_private_title')}</h5>
                          <p className="mb-2">{t('practical.payment_private_text')}</p>
                          <p className="text-sm text-muted-foreground mb-2">{t('practical.payment_private_note')}</p>
                          <p className="font-mono text-sm">{t('practical.payment_private_mobilepay')}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-2">{t('practical.payment_company_title')}</h5>
                          <p className="font-mono text-sm">{t('practical.payment_company_bank')}</p>
                        </div>
                      </div>
                    </div>
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

export default Practical;