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
                  <CardTitle>Databehandling og GDPR</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Mentis Balance er forpligtet til at beskytte dine personoplysninger i overensstemmelse med 
                    databeskyttelsesforordningen (GDPR).
                  </p>
                  
                  <h3 className="font-semibold mt-6 mb-3">Hvilke oplysninger indsamler vi?</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Navn og kontaktoplysninger (telefonnummer, e-mail)</li>
                    <li>Terapeutiske notater og journaloplysninger</li>
                    <li>Oplysninger indsamlet via kontaktformularer på hjemmesiden</li>
                  </ul>
                  
                  <h3 className="font-semibold mt-6 mb-3">Formål med databehandling</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>At yde psykologisk behandling og rådgivning</li>
                    <li>At opretholde kontakt og planlægge aftaler</li>
                    <li>At opfylde lovkrav om journalføring</li>
                  </ul>
                  
                  <h3 className="font-semibold mt-6 mb-3">Opbevaring af data</h3>
                  <p>
                    Klientoplysninger opbevares i overensstemmelse med psykologlovens krav om journalføring. 
                    Kontaktoplysninger fra hjemmesiden slettes efter 6 måneder, medmindre der etableres et 
                    terapeutisk forhold.
                  </p>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>Tavshedspligt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">
                    {t('practical.confidentiality_text')}
                  </p>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>Dine rettigheder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Du har følgende rettigheder i forbindelse med behandling af dine personoplysninger:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ret til indsigt i dine oplysninger</li>
                    <li>Ret til berigtigelse af forkerte oplysninger</li>
                    <li>Ret til sletning under særlige omstændigheder</li>
                    <li>Ret til at klage til Datatilsynet</li>
                  </ul>
                  
                  <p className="mt-6">
                    For spørgsmål om behandling af personoplysninger, kontakt Tania Brandt på 
                    <a href="mailto:taniabrandt@hotmail.com" className="text-accent hover:underline ml-1">
                      taniabrandt@hotmail.com
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="fade-in">
                <CardHeader>
                  <CardTitle>Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Denne hjemmeside bruger kun funktionelle cookies, der er nødvendige for hjemmesidens drift. 
                    Vi anvender ikke tracking-cookies eller analyse-cookies uden dit samtykke.
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