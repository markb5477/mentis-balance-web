import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';

const OnlineTherapy = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('online_therapy.title')}
            </h1>
            
            {/* Content */}
            <div className="mb-16 fade-in">
              {(t('online_therapy.content') as string).split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OnlineTherapy;


