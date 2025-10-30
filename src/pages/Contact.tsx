import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Car, Building2 } from 'lucide-react';
import Layout from '@/components/Layout';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('contact.title')}
            </h1>

            <div className="grid grid-cols-1 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 fade-in">
                <div>
                  <p className="text-lg mb-8">{t('contact.intro')}</p>
                </div>

                {/* Contact Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>{t('contact.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">{t('contact.phone')}</p> 
                        
                        <a href="tel:+4521636222" className="text-accent hover:underline">
                          21 63 62 22
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">{t('contact.email')}</p>
                        <a href="mailto:tania@mentisbalance.dk" className="text-accent hover:underline">
                          tania@mentisbalance.dk
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium mb-1">{t('contact.address')}</p>
                        <div className="text-muted-foreground">
                          <p>{t('contact.address_line_1')}</p>
                          <p>{t('contact.address_line_2')}</p>
                          <p>{t('contact.address_line_3')}</p>
                          <p>{t('contact.address_line_4')}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">{t('contact.cvr')}</p>
                        <p className="text-accent">45933903</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Car className="h-5 w-5 text-accent" />
                      <p className="text-sm text-muted-foreground">{t('contact.parking')}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Maps */}
                <Card>
  <CardContent className="p-4 space-y-3">
    <div>
      <a
        href="https://www.google.dk/maps/place/Psykologerne+ved+N%C3%B8rrebro+station/@55.702125,12.5351457,17z/data=!3m1!4b1!4m6!3m5!1s0x4652524be0de8ee9:0xb16b21c987690d55!8m2!3d55.702122!4d12.537726!16s%2Fg%2F11hzv53csf?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline hover:text-primary"
      >
        Open in Google Maps
      </a>
    </div>

    {/* embed by coordinates + output=embed ensures correct position */}
    <iframe
      src="https://www.google.com/maps?q=55.702122,12.537726&z=17&hl=da&output=embed"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Psykologerne ved Nørrebro station — Mentis Balance"
      className="rounded-lg"
    ></iframe>
  </CardContent>
</Card>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;