"use client";

import { useState, useEffect } from "react";
import styles from "./CookieConsent.module.css";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const all = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookie-consent", JSON.stringify(all));
    setVisible(false);
  };

  const rejectAll = () => {
    const minimal = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("cookie-consent", JSON.stringify(minimal));
    setVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setVisible(false);
    setShowPreferences(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        {!showPreferences ? (
          <>
            <div className={styles.content}>
              <h3 className={styles.title}>We value your privacy</h3>
              <p className={styles.text}>
                We use cookies to enhance your browsing experience, serve
                personalized content, and analyze our traffic. By clicking
                &quot;Accept All&quot;, you consent to our use of cookies. Read
                our{" "}
                <a href="/privacy-policy" className={styles.link}>
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className={styles.actions}>
              <button className={styles.btnAccept} onClick={acceptAll}>
                Accept All
              </button>
              <button className={styles.btnReject} onClick={rejectAll}>
                Reject All
              </button>
              <button
                className={styles.btnPreferences}
                onClick={() => setShowPreferences(true)}
              >
                Manage Preferences
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.content}>
              <h3 className={styles.title}>Cookie Preferences</h3>
              <p className={styles.text}>
                Choose which cookies you&apos;d like to allow. Necessary cookies
                are required for the site to function properly.
              </p>
            </div>
            <div className={styles.preferencesList}>
              <label className={styles.preferenceItem}>
                <div>
                  <span className={styles.preferenceName}>
                    Necessary Cookies
                  </span>
                  <span className={styles.preferenceDesc}>
                    Required for basic site functionality
                  </span>
                </div>
                <input type="checkbox" checked disabled />
              </label>
              <label className={styles.preferenceItem}>
                <div>
                  <span className={styles.preferenceName}>
                    Analytics Cookies
                  </span>
                  <span className={styles.preferenceDesc}>
                    Help us understand how visitors interact with our site
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((p) => ({
                      ...p,
                      analytics: e.target.checked,
                    }))
                  }
                />
              </label>
              <label className={styles.preferenceItem}>
                <div>
                  <span className={styles.preferenceName}>
                    Marketing Cookies
                  </span>
                  <span className={styles.preferenceDesc}>
                    Used to deliver relevant advertisements
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences((p) => ({
                      ...p,
                      marketing: e.target.checked,
                    }))
                  }
                />
              </label>
            </div>
            <div className={styles.actions}>
              <button className={styles.btnAccept} onClick={savePreferences}>
                Save Preferences
              </button>
              <button
                className={styles.btnPreferences}
                onClick={() => setShowPreferences(false)}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
