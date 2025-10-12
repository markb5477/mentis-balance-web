import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Car } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Henvendelse fra ${formData.name}`;
    const body = `Navn: ${formData.name}
Telefon: ${formData.phone}
Email: ${formData.email}

Besked:
${formData.message}`;
    
    const mailtoLink = `mailto:tania@mentisbalance.dk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Email åbnet",
      description: "Din email-klient skulle nu være åbnet med forudfyldt besked.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
              {t('contact.title')}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                      <Car className="h-5 w-5 text-accent" />
                      <p className="text-sm text-muted-foreground">{t('contact.parking')}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Maps */}
                <Card>
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4498.246913578024!2d12.5563!3d55.6981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f21!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQxJzUzLjIiTiAxMsKwMzMnMjIuNyJF!5e0!3m2!1sda!2sdk!4v1234567890123!5m2!1sda!2sdk"
                      width="100%"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mentis Balance Location"
                      className="rounded-lg"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Send en besked</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">{t('contact.form.name')} *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">{t('contact.form.phone')} *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">{t('contact.form.email')} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">{t('contact.form.message')}</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        {t('contact.form.submit')}
                      </Button>
                    </form>
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