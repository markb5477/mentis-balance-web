// Global pricing configuration
// All prices are in Danish Kroner (DKK)

export const PRICING = {
  // Individuel terapi 50 min
  INDIVIDUAL_THERAPY_50MIN: '950',
  // Første samtale ved opstart af forløb 60 min
  FIRST_CONSULTATION_60MIN: '1.000',
  
  // Supervision af psykologer på vej mod autorisation 60 min
  SUPERVISION_60MIN: '900',
  
  // Gruppesupervision for 2 personer
  GROUP_SUPERVISION_2_PEOPLE: '1.000',
  // Gruppesupervision for 3-4 personer
  GROUP_SUPERVISION_3_4_PEOPLE: '1.200',
  
  // Egenterapi for psykologer 60 min
  SELF_THERAPY_60MIN: '900',
  
  // Prolonged Exposure (PE) til behandling af PTSD 90 min
  PTSD_TREATMENT_90MIN: '1.400',
  
  // Pårørendesamtaler 1 person 50 min
  FAMILY_SESSIONS_1_PERSON_50MIN: '950',
  // Pårørendesamtaler 2 personer 90 min (Parterapi og familieterapi)
  FAMILY_SESSIONS_2_PERSONS_90MIN: '1.800',
  
  // Klippekort - 3x terapi
  SESSION_CARD_3X: '1.800',
  // Klippekort - 5x terapi
  SESSION_CARD_5X: '2.700',
  
  // Rabat til studerende, ledige og pensionister - Pris pr. session 50 min
  STUDENT_SESSION_PRICE: '500',
  // Første samtale med studierabat 60 min
  STUDENT_FIRST_CONSULTATION_60MIN: '600',
  // Rabat til studerende, ledige og pensionister - 3x terapi
  STUDENT_3X_CARD: '1.250',
  // Rabat til studerende, ledige og pensionister - 5x terapi
  STUDENT_5X_CARD: '2.000',
  
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
