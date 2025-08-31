import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Treatment = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('treatment.title')}
            </h1>
            
            {/* Introduction */}
            <div className="mb-16 fade-in">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('treatment.introduction')}
              </p>
            </div>

            {/* Services */}
            <div className="fade-in">
              <h2 className="font-heading text-2xl font-semibold mb-8">
                {t('treatment.services_title')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(t('treatment.services', { returnObjects: true }) as string[]).map((service, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <p className="font-medium text-center">{service}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Treatment;