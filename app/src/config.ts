/**
 * Brand configuration — edit these values to wire the site to real services.
 */

/** Point this at your Shopify storefront, e.g. "https://shop.chrispyrate.com"
 *  or a specific collection/drop page. Every "Shop the Drop" button uses it. */
export const SHOP_URL = "https://your-store.myshopify.com";

/** Social profiles */
export const SOCIALS = {
  instagram: "https://www.instagram.com/chrispyrate",
  tiktok: "https://www.tiktok.com/@chrispyrate",
  twitter: "https://x.com/chrispyrate",
};

/**
 * Email capture — the signup form is a front-end shell.
 * To make it live, either:
 *  1. Replace FORM_ACTION with a Shopify customer-signup endpoint, or
 *  2. Embed a Klaviyo / Mailchimp form action URL here.
 * Until then it falls back to opening the visitor's mail client.
 */
export const FORM_ACTION = ""; // e.g. "https://manage.kmail-lists.com/subscriptions/subscribe?a=XXXXXX"
export const CONTACT_EMAIL = "friends@chrispyrate.com";
