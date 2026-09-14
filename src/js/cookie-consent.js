// Google Consent Mode v2
window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

// Default consent state
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('cookie-accept');
  const rejectButton = document.getElementById('cookie-reject');
  const settingsButton = document.getElementById('cookie-settings');

  if (!banner) {
    return;
  }

  const consent = localStorage.getItem('cookieConsent');

  if (!consent) {
    banner.hidden = false;
  }

  if (consent === 'accepted') {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  if (consent === 'rejected') {
    gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  acceptButton?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');

    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });

    banner.hidden = true;
  });

  rejectButton?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');

    gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });

    banner.hidden = true;
  });

  settingsButton?.addEventListener('click', () => {
    // Settings panel will be added later.
    banner.hidden = false;
  });
});