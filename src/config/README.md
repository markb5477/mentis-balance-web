# Pricing Configuration

This directory contains the global pricing configuration for the Mentis Balance website.

## Files

- `pricing.ts` - Contains all pricing constants and helper functions

## Usage

### Import the pricing configuration

```typescript
import { PRICING, formatPrice, formatPriceWithText } from '@/config/pricing';
```

### Using pricing constants

```typescript
// Get a price value
const therapyPrice = PRICING.INDIVIDUAL_THERAPY_50MIN; // "1200"

// Format a price with currency
const formattedPrice = formatPrice(PRICING.INDIVIDUAL_THERAPY_50MIN); // "1200 kr."

// Format a price with additional text
const familyPrice = formatPriceWithText(PRICING.FAMILY_SESSIONS_90MIN, '2 prs'); // "1800 kr. (2 prs)"
```

### Using in translation files

For dynamic pricing in translations, use interpolation:

```json
{
  "cancellation_text": "Cancellation fee: {{cancellationFee}}"
}
```

Then in your component:

```typescript
t('cancellation_text', { cancellationFee: formatPrice(PRICING.CANCELLATION_FEE) })
```

## Available Pricing Constants

- `INDIVIDUAL_THERAPY_50MIN` / `INDIVIDUAL_THERAPY_90MIN`
- `SUPERVISION_50MIN` / `SUPERVISION_90MIN`
- `SELF_THERAPY_50MIN` / `SELF_THERAPY_90MIN`
- `PTSD_TREATMENT_50MIN` / `PTSD_TREATMENT_90MIN`
- `FAMILY_SESSIONS_50MIN` / `FAMILY_SESSIONS_90MIN`
- `SESSION_CARD_3X` / `SESSION_CARD_5X`
- `STUDENT_SESSION_PRICE` / `STUDENT_3X_CARD` / `STUDENT_5X_CARD`
- `ADHD_INITIAL_CONSULTATION` / `ADHD_FULL_ASSESSMENT`
- `CANCELLATION_FEE`

## Benefits

1. **Centralized Management**: All prices are defined in one place
2. **Consistency**: Same prices across all languages and components
3. **Easy Updates**: Change a price once, it updates everywhere
4. **Type Safety**: TypeScript ensures correct usage
5. **Formatting**: Consistent price formatting with helper functions
