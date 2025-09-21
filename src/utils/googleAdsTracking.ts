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
  AW_17548766700: 'AW-17548766700',
  AW_17541310215: 'AW-17541310215',
  AW_17541392073: 'AW-17541392073',
  AW_17541434774: 'AW-17541434774',
  AW_17543749270: 'AW-17543749270',
  AW_17521542598: 'AW-17521542598',
  AW_17554381814: 'AW-17554381814',
  AW_17554357532: 'AW-17554357532',
  AW_17554589140: 'AW-17554589140',
  AW_17554528935: 'AW-17554528935',
  AW_17554511136: 'AW-17554511136',
  AW_17557210856: 'AW-17557210856',
  AW_17557353505: 'AW-17557353505',
  AW_17559109058: 'AW-17559109058',
  AW_17578408415: 'AW-17578408415',
  AW_17578548091: 'AW-17578548091',
  AW_17568336538: 'AW-17568336538',
  AW_17575669569: 'AW-17575669569',
  AW_17578501516: 'AW-17578501516',
  AW_17581471594: 'AW-17581471594',
  
  // Conversion Labels (these need to be updated with actual labels from Google Ads)
  PURCHASE_CONVERSION_LABEL_1: 'PLACEHOLDER_LABEL_1', // Replace with actual conversion label for AW-17550600583
  PURCHASE_CONVERSION_LABEL_2: 'PLACEHOLDER_LABEL_2', // Replace with actual conversion label for AW-17550081000
  PURCHASE_CONVERSION_LABEL_3: 'PLACEHOLDER_LABEL_3', // Replace with actual conversion label for AW-17543477081
  PURCHASE_CONVERSION_LABEL_4: 'PLACEHOLDER_LABEL_4', // Replace with actual conversion label for AW-17548656857
  PURCHASE_CONVERSION_LABEL_5: 'PLACEHOLDER_LABEL_5', // Replace with actual conversion label for AW-17548766700
  PURCHASE_CONVERSION_LABEL_6: 'PLACEHOLDER_LABEL_6', // Replace with actual conversion label for AW-17541310215
  PURCHASE_CONVERSION_LABEL_7: 'PLACEHOLDER_LABEL_7', // Replace with actual conversion label for AW-17541392073
  PURCHASE_CONVERSION_LABEL_8: 'PLACEHOLDER_LABEL_8', // Replace with actual conversion label for AW-17541434774
  PURCHASE_CONVERSION_LABEL_9: 'PLACEHOLDER_LABEL_9', // Replace with actual conversion label for AW-17543749270
  PURCHASE_CONVERSION_LABEL_10: 'PLACEHOLDER_LABEL_10', // Replace with actual conversion label for AW-17521542598
  PURCHASE_CONVERSION_LABEL_11: 'PLACEHOLDER_LABEL_11', // Replace with actual conversion label for AW-17554381814
  PURCHASE_CONVERSION_LABEL_12: 'PLACEHOLDER_LABEL_12', // Replace with actual conversion label for AW-17554357532
  PURCHASE_CONVERSION_LABEL_13: 'PLACEHOLDER_LABEL_13', // Replace with actual conversion label for AW-17554589140
  PURCHASE_CONVERSION_LABEL_14: 'PLACEHOLDER_LABEL_14', // Replace with actual conversion label for AW-17554528935
  PURCHASE_CONVERSION_LABEL_15: 'PLACEHOLDER_LABEL_15', // Replace with actual conversion label for AW-17554511136
  PURCHASE_CONVERSION_LABEL_16: 'PLACEHOLDER_LABEL_16', // Replace with actual conversion label for AW-17557210856
  PURCHASE_CONVERSION_LABEL_17: 'PLACEHOLDER_LABEL_17', // Replace with actual conversion label for AW-17557353505
  PURCHASE_CONVERSION_LABEL_18: 'PLACEHOLDER_LABEL_18', // Replace with actual conversion label for AW-17559109058
  PURCHASE_CONVERSION_LABEL_19: 'PLACEHOLDER_LABEL_19', // Replace with actual conversion label for AW-17578408415
  PURCHASE_CONVERSION_LABEL_20: 'PLACEHOLDER_LABEL_20', // Replace with actual conversion label for AW-17578548091
  PURCHASE_CONVERSION_LABEL_21: 'PLACEHOLDER_LABEL_21', // Replace with actual conversion label for AW-17568336538
  PURCHASE_CONVERSION_LABEL_22: 'PLACEHOLDER_LABEL_22', // Replace with actual conversion label for AW-17575669569
  PURCHASE_CONVERSION_LABEL_23: 'PLACEHOLDER_LABEL_23', // Replace with actual conversion label for AW-17578501516
  PURCHASE_CONVERSION_LABEL_24: 'PLACEHOLDER_LABEL_24', // Replace with actual conversion label for AW-17581471594
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

  trackConversion(
    CONVERSION_CONFIG.AW_17548766700,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_5,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17541310215,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_6,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17541392073,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_7,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17541434774,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_8,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17543749270,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_9,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17521542598,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_10,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17554381814,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_11,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17554357532,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_12,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17554589140,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_13,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17554528935,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_14,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17554511136,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_15,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17557210856,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_16,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17557353505,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_17,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17559109058,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_18,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17578408415,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_19,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17578548091,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_20,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17568336538,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_21,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17575669569,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_22,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17578501516,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_23,
    value,
    'KES',
    transactionId
  );

  trackConversion(
    CONVERSION_CONFIG.AW_17581471594,
    CONVERSION_CONFIG.PURCHASE_CONVERSION_LABEL_24,
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
