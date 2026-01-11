import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { PRICING, formatPrice, formatPriceWithText } from '@/config/pricing';

const Prices = () => {
  const { t } = useTranslation();

  const priceItems = [
    { service: t('prices.individual_therapy'), price50: formatPrice(PRICING.INDIVIDUAL_THERAPY_50MIN), price60: '', price90: '' },
    { service: t('prices.first_consultation'), price50: '', price60: formatPrice(PRICING.FIRST_CONSULTATION_60MIN), price90: '' },
    { service: t('prices.ptsd_treatment'), price50: '', price60: '', price90: formatPrice(PRICING.PTSD_TREATMENT_90MIN) },
    { service: t('prices.family_sessions_1_person'), price50: formatPrice(PRICING.FAMILY_SESSIONS_1_PERSON_50MIN), price60: '', price90: '' },
    { service: t('prices.family_sessions_2_persons'), price50: '', price60: '', price90: formatPriceWithText(PRICING.FAMILY_SESSIONS_2_PERSONS_90MIN, t('prices_table.family_2_persons')) },
  ];

  const sessionCards = [
    { service: t('prices_table.session_3x'), price50: formatPrice(PRICING.SESSION_CARD_3X), price90: '' },
    { service: t('prices_table.session_5x'), price50: formatPrice(PRICING.SESSION_CARD_5X), price90: '' },
  ];

  const studentPrices = [
    { service: t('prices.student_session'), price50: formatPrice(PRICING.STUDENT_SESSION_PRICE), price60: '' },
    { service: t('prices.student_first_consultation'), price50: '', price60: formatPrice(PRICING.STUDENT_FIRST_CONSULTATION_60MIN) },
    { service: t('prices_table.session_3x'), price50: formatPrice(PRICING.STUDENT_3X_CARD), price60: '' },
    { service: t('prices_table.session_5x'), price50: formatPrice(PRICING.STUDENT_5X_CARD), price60: '' },
  ];

  const groupSupervisionItems = [
    { service: t('group_supervision.2_people'), price50: formatPrice(PRICING.GROUP_SUPERVISION_2_PEOPLE), price90: '' },
    { service: t('group_supervision.3_4_people'), price50: formatPrice(PRICING.GROUP_SUPERVISION_3_4_PEOPLE), price90: '' },
  ];

  const supervisionItems = [
    { service: t('prices.supervision'), price60: formatPrice(PRICING.SUPERVISION_60MIN) },
  ];

  const selfTherapyItems = [
    { service: t('prices.self_therapy'), price60: formatPrice(PRICING.SELF_THERAPY_60MIN) },
  ];

  const adhdAssessmentItems = [
    { service: t('prices.initial_consultation'), price50: formatPrice(PRICING.ADHD_INITIAL_CONSULTATION), price90: '' },
    { service: t('prices.full_assessment'), price50: formatPrice(PRICING.ADHD_FULL_ASSESSMENT), price90: '' },
  ];

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('prices.subtitle')}
            </h1>

            {/* Important Notice */}
            <Alert className="mb-12 fade-in">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-base">
                {t('prices.note')} {t('prices.insurance_note')}
              </AlertDescription>
            </Alert>

            {/* Price Table */}
            <Card className="mb-12 fade-in">
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">{t('prices_table.treatment_header')}</th>
                        <th className="text-center py-3">{t('prices_table.duration_50')}</th>
                        <th className="text-center py-3">{t('prices_table.duration_60')}</th>
                        <th className="text-center py-3">{t('prices_table.duration_90')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceItems.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3">{item.service}</td>
                          <td className="text-center py-3">{item.price50}</td>
                          <td className="text-center py-3">{item.price60 || ''}</td>
                          <td className="text-center py-3">{item.price90 || ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{t('prices.price_note')}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t('prices.family_sessions_note')}</p>
              </CardContent>
            </Card>

            {/* Secondary Pricing Tables - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Session Cards */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('prices.session_cards')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{t('prices.session_cards_text')}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 w-1/2">{t('prices_table.treatment_header')}</th>
                          <th className="text-center py-3 w-1/2">{t('prices_table.price')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sessionCards.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 w-1/2">{item.service}</td>
                            <td className="text-center py-3 w-1/2">{item.price50}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Group Supervision */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('group_supervision.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 w-1/2">{t('prices_table.treatment_header')}</th>
                          <th className="text-center py-3 w-1/2">{t('prices_table.price')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {groupSupervisionItems.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 w-1/2">{item.service}</td>
                            <td className="text-center py-3 w-1/2">{item.price50}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Supervision and Self Therapy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Supervision */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('prices.supervision')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 w-1/2">{t('prices_table.treatment_header')}</th>
                          <th className="text-center py-3 w-1/2">{t('prices_table.price')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {supervisionItems.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 w-1/2">{item.service} {t('prices.supervision_note')}</td>
                            <td className="text-center py-3 w-1/2">{item.price60}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Self Therapy */}
              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>{t('prices.self_therapy')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 w-1/2">{t('prices_table.treatment_header')}</th>
                          <th className="text-center py-3 w-1/2">{t('prices_table.price')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selfTherapyItems.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 w-1/2">{item.service} {t('prices.self_therapy_note')}</td>
                            <td className="text-center py-3 w-1/2">{item.price60}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Student Discount */}
            <Card className="mb-12 fade-in">
              <CardHeader>
                <CardTitle>{t('prices.student_discount_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{t('prices.student_discount')}</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 w-1/2">{t('prices_table.treatment_header')}</th>
                        <th className="text-center py-3 w-1/4">{t('prices_table.duration_50')}</th>
                        <th className="text-center py-3 w-1/4">{t('prices_table.duration_60')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentPrices.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 w-1/2">{item.service}</td>
                          <td className="text-center py-3 w-1/4">{item.price50 || ''}</td>
                          <td className="text-center py-3 w-1/4">{item.price60 || ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{t('prices.student_card_note')}</p>
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
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 w-1/2">{t('prices_table.treatment_header')}</th>
                        <th className="text-center py-3 w-1/2">{t('prices_table.price')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adhdAssessmentItems.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 w-1/2">{item.service}</td>
                          <td className="text-center py-3 w-1/2">{item.price50}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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