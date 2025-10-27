// Global pricing configuration
// All prices are in Danish Kroner (DKK)

export const PRICING = {
  // Individual therapy sessions
  INDIVIDUAL_THERAPY_50MIN: '1.200',
  INDIVIDUAL_THERAPY_90MIN: '1.700',
  
  // Supervision
  SUPERVISION_50MIN: '1.200',
  SUPERVISION_90MIN: '',
  
  // Group supervision
  GROUP_SUPERVISION_2_PEOPLE: '1.500',
  GROUP_SUPERVISION_3_5_PEOPLE: '1.600',
  GROUP_SUPERVISION_6_PLUS_PEOPLE: '2.000',
  
  // Self-therapy
  SELF_THERAPY_50MIN: '1.200',
  SELF_THERAPY_90MIN: '',
  
  // PTSD treatment
  PTSD_TREATMENT_50MIN: '',
  PTSD_TREATMENT_90MIN: '1.800',
  
  // Family sessions
  FAMILY_SESSIONS_50MIN: '1.200',
  FAMILY_SESSIONS_90MIN: '1.800',
  
  // Session cards (therapy packages)
  SESSION_CARD_3X: '3.000',
  SESSION_CARD_5X: '5.000',
  
  // Student discounts
  STUDENT_SESSION_PRICE: '950',
  STUDENT_3X_CARD: '2.500',
  STUDENT_5X_CARD: '3.750',
  
  // ADHD Assessment
  ADHD_INITIAL_CONSULTATION: '1.500',
  ADHD_FULL_ASSESSMENT: '12.000',
  
  // Cancellation fee
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
