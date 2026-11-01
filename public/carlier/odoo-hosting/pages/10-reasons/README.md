# 10 Reasons — Odoo ERP Hosting landing page

A listicle-style landing page modelled on the She's Birdie bundle page, using the
Carlier colour palette (`#05070f`, `#3b82f6`, `#06b6d4`).

**URL:** `/odoo-hosting/pages/10-reasons/`

## Files

- `index.html` — page markup, meta tags, JSON-LD
- `styles.css` — standalone styles (no dependency on the main site CSS)
- `script.js` — header state, scroll reveal, sticky offer bar

## Live prices used on the page

Verified from the Stripe buy buttons on `/odoo-hosting/`:

| Plan | Price | Stripe checkout |
|---|---|---|
| Monthly | €55 / month | <https://buy.stripe.com/dRmbJ36J8ghmaTp8RN73G03> |
| Annual | €594 / year (€49.50/month, save €66) | <https://buy.stripe.com/28EaEZ2sS7KQ0eL9VR73G01> |
| Backups add-on | €240 | <https://buy.stripe.com/14AcN78RgaX2gdJ7NJ73G00> |

The page links directly to the Stripe checkout URLs rather than embedding the
buy-button iframe, so the dark visual design stays intact.

## Before publishing

1. **Replace the placeholder testimonials.** The six reviews in the
   `#reviews` section are sample copy for layout only. They are marked with
   `data-placeholder="true"` and a comment above the section. Replace every
   quote, name, and role with a verified customer testimonial, or remove the
   section.
2. **Approve or edit the founder note.** It is marked with a `DRAFT` comment in
   the `#proof` section.
3. **Confirm the uptime SLA wording.** The page uses the 99.9% uptime SLA from
   the main Odoo ERP Hosting page.
4. **Confirm the backups billing description.** The page describes the €240
   add-on as billed separately via Stripe, without stating a billing period.

## Local preview

From `carlier.site/`:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/odoo-hosting/pages/10-reasons/>.
