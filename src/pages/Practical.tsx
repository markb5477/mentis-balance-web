import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CreditCard, Phone } from 'lucide-react';
import Layout from '@/components/Layout';

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
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>{t('practical.conditions')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{t('practical.condition_1')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{t('practical.condition_2')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{t('practical.condition_3')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Confidentiality */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-accent" />
                    <span>{t('practical.confidentiality')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{t('practical.confidentiality_text')}</p>
                </CardContent>
              </Card>

              {/* Cancellation Rules */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-accent" />
                    <span>{t('practical.cancellation')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{t('practical.cancellation_text')}</p>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-accent" />
                    <span>{t('practical.payment')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">{t('practical.payment_title')}</h4>
                      <div className="space-y-4">
                        <p>{t('practical.payment_text_1')}</p>
                        <p>{t('practical.payment_text_2')}</p>
                        <p>{t('practical.payment_text_3')}</p>
                        <p>{t('practical.payment_text_4')}</p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-3">{t('practical.payment_method')}</h4>
                      <p>{t('practical.payment_method_text')}</p>
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