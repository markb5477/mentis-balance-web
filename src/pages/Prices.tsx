import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const Prices = () => {
  const { t } = useTranslation();

  const priceItems = [
    { service: t('prices.individual_therapy'), price50: '1200 kr.', price90: '1700 kr.' },
    { service: t('prices.supervision'), price50: '1200 kr.', price90: '' },
    { service: t('prices.self_therapy'), price50: '1200 kr.', price90: '' },
    { service: t('prices.ptsd_treatment'), price50: '', price90: '1800 kr.' },
    { service: t('prices.family_sessions'), price50: '1200 kr.', price90: '1800 kr. (2 prs)' },
  ];

  const sessionCards = [
    { sessions: '3x terapi', price: '4.000 kr.' },
    { sessions: '5x terapi', price: '5.000 kr.' },
  ];

  const studentPrices = [
    { sessions: 'Pris pr. session', price: '950 kr.' },
    { sessions: '3x terapi', price: '2.500 kr.' },
    { sessions: '5x terapi', price: '3.750 kr.' },
  ];

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-8 fade-in">
              {t('prices.title')}
            </h1>
            
            <h2 className="font-heading text-2xl font-semibold text-center mb-12 fade-in">
              {t('prices.subtitle')}
            </h2>

            {/* Important Notice */}
            <Alert className="mb-12 fade-in">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-base">
                {t('prices.note')}
              </AlertDescription>
            </Alert>

            {/* Price Table */}
            <Card className="mb-12 fade-in">
              <CardHeader>
                <CardTitle className="text-center">Priser</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Behandling</th>
                        <th className="text-center py-3">50 min</th>
                        <th className="text-center py-3">90 min</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceItems.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3">{item.service}</td>
                          <td className="text-center py-3">{item.price50}</td>
                          <td className="text-center py-3">{item.price90}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Group Supervision */}
            <Card className="mb-8 fade-in">
              <CardContent className="p-6">
                <p className="text-center font-medium">{t('prices.group_supervision')}</p>
              </CardContent>
            </Card>

            {/* Session Cards */}
            <Card className="mb-12 fade-in">
              <CardHeader>
                <CardTitle>{t('prices.session_cards')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{t('prices.session_cards_text')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sessionCards.map((card, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-warm-neutral rounded-lg">
                      <span>{card.sessions}</span>
                      <span className="font-bold text-accent">{card.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Student Discount */}
            <Card className="mb-12 fade-in">
              <CardHeader>
                <CardTitle>Rabat til studerende og ledige</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{t('prices.student_discount')}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {studentPrices.map((price, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-warm-neutral rounded-lg">
                      <span>{price.sessions}</span>
                      <span className="font-bold text-accent">{price.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ADHD Assessment */}
            <Card className="fade-in">
              <CardHeader>
                <CardTitle>{t('prices.adhd_assessment')}</CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {t('prices.adhd_note')}
                  </AlertDescription>
                </Alert>
                
                <h4 className="font-semibold mb-4">{t('prices.assessment_process')}</h4>
                <p className="mb-4">{t('prices.assessment_process_text')}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-warm-neutral rounded-lg">
                    <span>{t('prices.initial_consultation')}</span>
                    <span className="font-bold text-accent">1.500 kr.</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-warm-neutral rounded-lg">
                    <span>{t('prices.full_assessment')}</span>
                    <span className="font-bold text-accent">7.000 kr.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;