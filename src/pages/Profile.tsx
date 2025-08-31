import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import headshotImage from '@/assets/tania-brandt-headshot.jpg';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('profile.title')}
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Profile Image */}
              <div className="lg:col-span-1 flex justify-center fade-in">
                <div className="relative">
                  <img
                    src={headshotImage}
                    alt="Tania Brandt, Authorized Psychologist"
                    className="w-80 h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10"></div>
                </div>
              </div>

              {/* Biography */}
              <div className="lg:col-span-2 fade-in">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {t('profile.bio')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;