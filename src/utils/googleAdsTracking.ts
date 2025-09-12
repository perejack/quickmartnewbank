// Google Ads Conversion Tracking Utility
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Configuration for Google Ads conversion tracking
const CONVERSION_CONFIG = {
  // Google Ads IDs
  AW_17550600583: 'AW-17550600583',
  AW_17550081000: 'AW-17550081000',
  AW_17543477081: 'AW-17543477081',
  AW_17548656857: 'AW-17548656857',
  
  // Conversion Labels (these need to be updated with actual labels from Google Ads)
  PURCHASE_CONVERSION_LABEL_1: 'PLACEHOLDER_LABEL_1', // Replace with actual conversion label for AW-17550600583
  PURCHASE_CONVERSION_LABEL_2: 'PLACEHOLDER_LABEL_2', // Replace with actual conversion label for AW-17550081000
  PURCHASE_CONVERSION_LABEL_3: 'PLACEHOLDER_LABEL_3', // Replace with actual conversion label for AW-17543477081
  PURCHASE_CONVERSION_LABEL_4: 'PLACEHOLDER_LABEL_4', // Replace with actual conversion label for AW-17548656857
};

/**
 * Track a conversion event for Google Ads
 * @param conversionId - The Google Ads conversion ID (e.g., 'AW-17550600583')
 * @param conversionLabel - The conversion label from Google Ads
 * @param value - The transaction value (optional)
 * @param currency - The currency code (default: 'KES' for Kenyan Shilling)
 * @param transactionId - Unique transaction ID to prevent duplicate tracking
 */
export const trackConversion = (
  conversionId: string,
  conversionLabel: string,
  value?: number,
  currency: string = 'KES',
  transactionId?: string
) => {
  // Check if gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    const conversionData: any = {
      send_to: `${conversionId}/${conversionLabel}`,
    };

    // Add value if provided
    if (value !== undefined) {
      conversionData.value = value;
      conversionData.currency = currency;
    }

    // Add transaction ID if provided (helps prevent duplicate tracking)
    if (transactionId) {
      conversionData.transaction_id = transactionId;
    }

    // Send the conversion event
    window.gtag('event', 'conversion', conversionData);
    
    console.log('Google Ads conversion tracked:', {
      conversionId,
      conversionLabel,
      value,
      currency,
      transactionId
    });
  } else {
    console.warn('Google Analytics gtag not available for conversion tracking');
  }
};

/**
 * Track application completion conversion
 * This should be called when a user successfully completes their application payment
 */
export const trackApplicationConversion = (applicationData?: {
  value?: number;
  transactionId?: string;
  position?: string;
}) => {
  const value = applicationData?.value || 160; // Default to 160 KSh application fee
  const transactionId = applicationData?.transactionId || `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Track conversion for all three Google Ads accounts
  trackConversion(
    CONVERSION_CONFIG.AW_17550600583,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_1,
    value,
    'KES',
    transactionId
  );
  
  trackConversion(
    CONVERSION_CONFIG.AW_17550081000,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_2,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17543477081,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_3,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17548656857,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_4,
    value,
    'KES',
    transactionId
  );

  // Also send a custom event for additional tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'application_completed', {
      event_category: 'Job Application',
      event_label: applicationData?.position || 'Unknown Position',
      value: value,
      currency: 'KES'
    });
  }
};

/**
 * Track when user initiates payment process
 */
export const trackPaymentInitiated = (position?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      event_category: 'Job Application',
      event_label: position || 'Unknown Position',
      value: 160,
      currency: 'KES'
    });
  }
};

/**
 * Track when user clicks "Finish Application" button
 */
export const trackFinishApplicationClick = (position?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_payment_info', {
      event_category: 'Job Application',
      event_label: position || 'Unknown Position',
      value: 160,
      currency: 'KES'
    });
  }
};
