export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).fbq) {
    (window as unknown as { fbq: (cmd: string, event: string, p?: Record<string, unknown>) => void }).fbq("track", eventName, params);
  }
}

export function trackInitiateCheckout() {
  trackEvent("InitiateCheckout", { value: 97, currency: "USD" });
}

export function trackLead() {
  trackEvent("Lead");
}

export function trackPageView() {
  trackEvent("PageView");
}
