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
  const settingsPanel = document.getElementById('cookie-settings-panel');

  if (!settingsPanel) {
    return;
  }

  settingsPanel.hidden = false;

  const analyticsCheckbox = document.getElementById('cookie-analytics');

  if (analyticsCheckbox) {
    analyticsCheckbox.checked =
      localStorage.getItem('cookieConsent') === 'accepted';
  }
});

const saveSettingsButton = document.getElementById('cookie-save-settings');

saveSettingsButton?.addEventListener('click', () => {
  const analyticsCheckbox = document.getElementById('cookie-analytics');

  const analyticsAccepted = analyticsCheckbox?.checked;

  localStorage.setItem(
    'cookieConsent',
    analyticsAccepted ? 'accepted' : 'rejected'
  );

  gtag('consent', 'update', {
    analytics_storage: analyticsAccepted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  const settingsPanel = document.getElementById('cookie-settings-panel');

  if (settingsPanel) {
    settingsPanel.hidden = true;
  }

  banner.hidden = true;
});

const acceptAllButton = document.getElementById('cookie-accept-all');

acceptAllButton?.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');

  gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  const settingsPanel = document.getElementById('cookie-settings-panel');

  if (settingsPanel) {
    settingsPanel.hidden = true;
  }

  banner.hidden = true;
});
});