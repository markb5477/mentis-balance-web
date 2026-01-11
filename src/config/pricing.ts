// Global pricing configuration
// All prices are in Danish Kroner (DKK)

export const PRICING = {
  // Individuel terapi 50 min
  INDIVIDUAL_THERAPY_50MIN: '950',
  // Individuel terapi 90 min
  INDIVIDUAL_THERAPY_90MIN: '1.700',
  
  // Supervision af psykologer på vej mod autorisation 50 min
  SUPERVISION_50MIN: '900',
  // Supervision af psykologer på vej mod autorisation 90 min
  SUPERVISION_90MIN: '',
  
  // Gruppesupervision for 2 personer
  GROUP_SUPERVISION_2_PEOPLE: '1.000',
  // Gruppesupervision for 3-5 personer
  GROUP_SUPERVISION_3_5_PEOPLE: '1.200',
  // Gruppesupervision for 6 personer eller flere
  // GROUP_SUPERVISION_6_PLUS_PEOPLE: '2.000',
  
  // Egenterapi for psykologer 50 min
  SELF_THERAPY_50MIN: '9000',
  // Egenterapi for psykologer 90 min
  SELF_THERAPY_90MIN: '',
  
  // PTSD-behandling 50 min
  PTSD_TREATMENT_50MIN: '',
  // PTSD-behandling 90 min
  PTSD_TREATMENT_90MIN: '1.400',
  
  // Pårørendesamtaler 50 min
  FAMILY_SESSIONS_50MIN: '1.200',
  // Pårørendesamtaler 90 min
  FAMILY_SESSIONS_90MIN: '1.800',
  
  // Online terapi, krypteret. 50 min
  ONLINE_THERAPY_50MIN: '900',
  // Online terapi, krypteret. 90 min
  ONLINE_THERAPY_90MIN: '',
  
  // Online supervision, krypteret. 50 min
  ONLINE_SUPERVISION_50MIN: '900',
  // Online supervision, krypteret. 90 min
  ONLINE_SUPERVISION_90MIN: '',
  
  // Klippekort - 3x terapi
  SESSION_CARD_3X: '1.800',
  // Klippekort - 5x terapi
  SESSION_CARD_5X: '2.700',
  
  // Rabat til studerende og ledige - Pris pr. session
  STUDENT_SESSION_PRICE: '500',
  // Rabat til studerende og ledige - 3x terapi
  STUDENT_3X_CARD: '2.500',
  // Rabat til studerende og ledige - 5x terapi
  STUDENT_5X_CARD: '3.750',
  
  // Udredning ADHD/ADD - Opstartssamtale 70 min.
  ADHD_INITIAL_CONSULTATION: '1.000',
  // Udredning ADHD/ADD - Fuldt udredningsforløb
  ADHD_FULL_ASSESSMENT: '5.000',
  
  // Afbudsgebyr
  CANCELLATION_FEE: '500'
} as const;

// Helper function to format prices with currency
export const formatPrice = (price: string | number): string => {
  const priceStr = typeof price === 'number' ? price.toString() : price;
  return `${priceStr} kr.`;
};

// Helper function to format prices with additional text (like "2 prs" for family sessions)
export const formatPriceWithText = (price: string | number, additionalText?: string): string => {
  const formattedPrice = formatPrice(price);
  return additionalText ? `${formattedPrice} (${additionalText})` : formattedPrice;
};
