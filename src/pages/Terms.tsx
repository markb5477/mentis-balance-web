import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

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
                  <CardTitle>Behandlingsvilkår</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Ved at booke en aftale accepterer du følgende vilkår for psykologbehandling hos Mentis Balance.
                  </p>
                  
                  <h3 className="font-semibold mt-6 mb-3">Aftaler og booking</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Aftaler bookes ved telefonisk henvendelse eller via kontaktformular</li>
                    <li>Bekræftelse af aftale sker telefonisk eller via e-mail</li>
                    <li>Første session anbefales at være med fysisk fremmøde</li>
                  </ul>
                  
                  <h3 className="font-semibold mt-6 mb-3">Afbudsregler</h3>
                  <p>{t('practical.cancellation_text')}</p>
                  
                  <h3 className="font-semibold mt-6 mb-3">Betaling</h3>
                  <p>{t('practical.payment_method_text')}</p>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>Forsikring og tilskud</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{t('practical.payment_text_1')}</p>
                  <p>{t('practical.payment_text_2')}</p>
                  <p>{t('practical.payment_text_3')}</p>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>Kvalitet og etik</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Tania Brandt er autoriseret psykolog og medlem af Dansk Psykolog Forening</li>
                    <li>Behandlingen følger etiske retningslinjer for psykologer</li>
                    <li>Løbende supervision og faglig udvikling sikrer høj kvalitet</li>
                    <li>Tavshedspligt overholdes i henhold til psykologloven</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>Klager</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Eventuelle klager over behandling kan rettes til Psykolognævnet. 
                    Kontakt information findes på <a href="https://www.psykolognaevnet.dk" className="text-accent hover:underline">psykolognaevnet.dk</a>
                  </p>
                  
                  <p className="mt-4">
                    For spørgsmål til vilkår, kontakt Tania Brandt på 
                    <a href="tel:+4521636222" className="text-accent hover:underline ml-1">21 63 62 22</a> eller 
                    <a href="mailto:taniabrandt@hotmail.com" className="text-accent hover:underline ml-1">taniabrandt@hotmail.com</a>
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